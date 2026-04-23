"use client";

import { useState } from "react";
import { Column, Row, Heading, Text, Input, Button } from "@once-ui-system/core";
import styles from "./Subscribe.module.scss";

export const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Could not connect. Please try again.");
    }
  };

  return (
    <div className={styles.wrapper}>
      <Row fillWidth gap="xl" vertical="center" s={{ direction: "column" }}>
        {/* Left: copy */}
        <Column gap="8" flex={1} fillWidth>
          <Text variant="label-default-s" onBackground="brand-medium">
            Newsletter
          </Text>
          <Heading as="h3" variant="heading-strong-m">
            Stay in the loop
          </Heading>
          <Text variant="body-default-s" onBackground="neutral-weak">
            New posts on data, tech, and whatever else is on my mind.
            No spam. Unsubscribe any time.
          </Text>
        </Column>

        {/* Right: form */}
        <Column flex={1} gap="12" fillWidth>
          {status === "success" ? (
            <Text variant="body-default-s" onBackground="brand-medium">
              You're in. Check your inbox to confirm.
            </Text>
          ) : (
            <>
              <Input
                id="subscribe-email"
                label="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: "100%" }}
              />
              <Button
                label={status === "loading" ? "Subscribing..." : "Subscribe"}
                onClick={handleSubmit}
                variant="primary"
                size="m"
                fillWidth
              />
            </>
          )}
          {status === "error" && (
            <Text variant="body-default-xs" onBackground="danger-medium">
              {message}
            </Text>
          )}
        </Column>
      </Row>
    </div>
  );
};
