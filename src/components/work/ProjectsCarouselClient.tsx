"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { Row, Heading, Button, IconButton, SmartLink, Text } from "@once-ui-system/core";
import Image from "next/image";
import classNames from "classnames";
import styles from "./ProjectsCarousel.module.scss";

interface ProjectItem {
  slug: string;
  title: string;
  summary: string;
  image: string;
}

interface ProjectsCarouselClientProps {
  projects: ProjectItem[];
}

export function ProjectsCarouselClient({ projects }: ProjectsCarouselClientProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 1);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
    const firstCard = el.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.offsetWidth + 24 : el.clientWidth;
    setActiveIndex(Math.round(el.scrollLeft / cardWidth));
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    const ro = new ResizeObserver(updateArrows);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      ro.disconnect();
    };
  }, [updateArrows]);

  const scrollByCard = (direction: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.offsetWidth + 24 : el.clientWidth;
    el.scrollBy({ left: direction === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
  };

  return (
    <div className={styles.section}>
      <Row fillWidth horizontal="between" vertical="center" className={styles.header}>
        <Heading as="h2" variant="heading-strong-l">
          Projects
        </Heading>
        <Button href="/work" variant="secondary" size="s" suffixIcon="arrowRight">
          View all projects
        </Button>
      </Row>

      <div className={styles.carouselWrapper}>
        {canScrollLeft && <div className={styles.fadeLeft} aria-hidden="true" />}
        {canScrollRight && <div className={styles.fadeRight} aria-hidden="true" />}

        <div className={classNames(styles.arrowLeft, !canScrollLeft && styles.hidden)}>
          <IconButton
            icon="chevronLeft"
            onClick={() => scrollByCard("left")}
            variant="secondary"
            size="m"
            aria-label="Scroll projects left"
            tabIndex={canScrollLeft ? 0 : -1}
          />
        </div>

        <div ref={trackRef} className={styles.track}>
          {projects.map((project) => (
            <SmartLink
              key={project.slug}
              href={`/work/${project.slug}`}
              className={styles.card}
            >
              {project.image && (
                <div className={styles.imageWrapper}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 85vw, 380px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              )}
              <div className={styles.cardBody}>
                <Heading as="h3" variant="heading-strong-m">
                  {project.title}
                </Heading>
                <Text
                  variant="body-default-s"
                  onBackground="neutral-weak"
                  className={styles.summary}
                >
                  {project.summary}
                </Text>
              </div>
            </SmartLink>
          ))}
        </div>

        <div className={classNames(styles.arrowRight, !canScrollRight && styles.hidden)}>
          <IconButton
            icon="chevronRight"
            onClick={() => scrollByCard("right")}
            variant="secondary"
            size="m"
            aria-label="Scroll projects right"
            tabIndex={canScrollRight ? 0 : -1}
          />
        </div>
      </div>

      <div className={styles.dots} aria-hidden="true">
        {projects.map((_, i) => (
          <span
            key={i}
            className={classNames(styles.dot, i === activeIndex && styles.dotActive)}
          />
        ))}
      </div>
    </div>
  );
}
