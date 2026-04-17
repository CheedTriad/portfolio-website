"use client";

import { useState } from "react";
import {
  Flex,
  Heading,
  Text,
  Button,
  Input,
  Textarea,
  Row,
  Column,
  Line,
} from "@once-ui-system/core";

export default function Organist() {
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent]       = useState(false);
  const [occasion, setOccasion] = useState("");
  const [date, setDate]         = useState("");

  const handleSubmit = async () => {
  await fetch("https://formspree.io/f/meevappb", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      email,
      occasion,
      date,
      message,
    }),
  });
  setSent(true);
};

  return (
    <Flex
      as="main"
      direction="column"
      vertical="center"
      fillWidth
      gap="xl"
      paddingX="l"
      paddingY="xl"
    >

     {/* ── HERO ── */}
        <Flex
        direction="row"
        fillWidth
        gap="xl"
        vertical="center"
        wrap
        style={{ minHeight: "400px" }}
        >
        <Flex direction="column" gap="m" style={{ flex: 1, minWidth: "280px", maxWidth: "50%" }}>
            <Heading variant="display-strong-l">
            Organist & Pianist
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak">
            Music for weddings, funerals, Mass, and concerts — 
            Leicester and surrounding areas.
            </Text>
        </Flex>

        <Flex
            style={{ 
            flex: 1, 
            minWidth: "280px", 
            maxWidth: "50%",
            aspectRatio: "3/4",
            borderRadius: "12px",
            overflow: "hidden"
            }}
        >
            <img
            src="/images/side_portrait.jpg"
            alt="Chidiere portrait"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
            />
  </Flex>
</Flex>

      <Line />

      {/* ── BIOGRAPHY ── */}
      <Flex direction="column" gap="m" fillWidth maxWidth={720}>
        <Heading variant="heading-strong-l">About My Music</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          I have been playing the organ and piano for over a decade, 
          serving as the organist and pianist for Mass at my parish in Leicester. 
          My musical background spans classical repertoire, liturgical accompaniment, 
          and solo performance — with a particular love for the French Romantic 
          tradition and Bach.
        </Text>
        <Text variant="body-default-m" onBackground="neutral-weak">
          I am available for weddings, funerals, memorial services, and concerts. 
          I take time to understand what each occasion calls for and tailor the 
          music accordingly — whether that means something joyful and grand, 
          or quiet and contemplative.
        </Text>
      </Flex>

      {/* Second photo — at the organ, candid */}
      <Flex
        fillWidth
        maxWidth={720}
        radius="l"
        overflow="hidden"
        style={{ aspectRatio: "16/9" }}
      >
        <img
          src="/images/organ.png"
          alt="Chidiere playing the organ"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Flex>

      <Line />

      {/* ── REPERTOIRE ── */}
      <Flex direction="column" gap="l" fillWidth maxWidth={960}>
        <Heading variant="heading-strong-l">Repertoire</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Below is a selection of pieces I regularly perform for weddings 
          and funerals. Every programme is tailored to your wishes — 
          if there is something specific you have in mind that isn't listed, 
          please do get in touch.
        </Text>

        <Row gap="xl" fillWidth wrap>

          {/* Weddings */}
          <Column flex={1} minWidth={260} gap="m">
            <Heading variant="heading-strong-m">Weddings</Heading>
            <Line />
            <Text variant="label-strong-m" onBackground="neutral-weak" style={{ textDecoration: "underline" }}>PRELUDE & ARRIVAL</Text>
            {[
              "Spring from The Four Seasons - Vivaldi",
              "Hornpipe - Handel",
              "Jesu, Joy of Man's Desiring - Bach",
              "Wachet Auf, ruft uns die Stimme BWV 645 - Bach",
              "Sheep May Safely Graze - Bach",
              "Largo from Xerxes - Handel",
              "Canon in D - Pachelbel",
              "Morning from Peer Gynt - Grieg",
            ].map((piece) => (
              <Text
                key={piece}
                variant="body-default-s"
                onBackground="neutral-weak"
              >
                {piece}
              </Text>
            ))}
            <Text variant="label-strong-m" onBackground="neutral-weak" style={{ textDecoration: "underline" }}>ENTRANCE OF THE BRIDE</Text>
            {[
              "Bridal March from Lohengrin - Wagner",
                "Prince of Denmark's March - Clarke",
                "Air from Suite No. 3 - Bach",
                "Canon in D - Pachelbel",
                "Trumpet Tune - Purcell",
            ].map((piece) => (
              <Text
                key={piece}
                variant="body-default-s"
                onBackground="neutral-weak"
              >
                {piece}
              </Text>
            ))}
            <Text variant="label-strong-m" onBackground="neutral-weak" style={{ textDecoration: "underline" }}>HYMNS</Text>
            {[
              "All Things Bright and Beautiful",
                "Jerusalem",
                "Lord of all Hopefulness",
                "Come Down, O Love Divine",
                "Guide me O Thou Great Redeemer",
                "Immortal, Invisible, God only Wise",
                "Love Divine, All Loves Excelling",
                "Morning Has Broken",
                "I Vow to Thee, My Country",
                "Now Thank We All Our God",
                "Praise My Soul the King of Heaven",
                "Thine be the Glory",
                "Lord of the Dance",
                "Shine, Jesus Shine",
            ].map((piece) => (
              <Text
                key={piece}
                variant="body-default-s"
                onBackground="neutral-weak"
              >
                {piece}
              </Text>
            ))}
             <Text variant="label-strong-m" onBackground="neutral-weak" style={{ textDecoration: "underline" }}>SIGNING OF THE REGISTER</Text>
            {[
              "Jesu, Joy of Man's Desiring - Bach",
                "Canon in D - Pachelbel",
                "Priere a Notre Dame - Boellmann",
                "Nun Danket Alle Gott - Bach",
                "Ode to Joy - Beethoven",
                "Sheep May Safely Graze - Bach",
                "Largo from Xerxes - Handel",
                "Wachet Auf, ruft uns die Stimme BWV 645 - Bach",
            ].map((piece) => (
              <Text
                key={piece}
                variant="body-default-s"
                onBackground="neutral-weak"
              >
                {piece}
              </Text>
            ))}
            <Text variant="label-strong-m" onBackground="neutral-weak" style={{ textDecoration: "underline" }}>RECESSIONAL</Text>
            {[
              "Toccata in F - Widor",
                "Wedding March from A Midsummer Night's Dream - Mendelssohn",
                "Hornpipe - Handel",
                "Arrival of the Queen of Sheba - Handel",
                "Grand March from Aida - Verdi",
                "Marche-Sortie - Dubois",
                "Nun Danket Alle Gott - Karg-Elert",
                "Sortie in Eb - Lefebure-Wely",
                "Wedding March from Symphony No. 3 - Saint-Saëns",
                "Overture from Fireworks Music - Handel",
            ].map((piece) => (
              <Text
                key={piece}
                variant="body-default-s"
                onBackground="neutral-weak"
              >
                {piece}
              </Text>
            ))}


          </Column>

          {/* Funerals */}
          <Column flex={1} minWidth={260} gap="m">
            <Heading variant="heading-strong-m">Funerals & Memorials</Heading>
            <Line />
            <Text variant="label-strong-m" onBackground="neutral-weak" style={{ textDecoration: "underline" }}>PROCESSIONAL</Text>
            {[
              "Largo from Xerxes - Handel",
                "Adagio in G Minor - Albinoni",
                "Air from Suite No. 3 - Bach",
                "Canon in D - Pachelbel",
                "Morning from Peer Gynt - Grieg",
                "Jesu, Joy of Man's Desiring - Bach",
                "Pie Jesu - Fauré",
                "Ave Maria - Schubert",
                "Laudate Dominum - Mozart",
            ].map((piece) => (
              <Text
                key={piece}
                variant="body-default-s"
                onBackground="neutral-weak"
              >
                {piece}
              </Text>
            ))}
            <Text variant="label-strong-m" onBackground="neutral-weak" style={{ textDecoration: "underline" }}>HYMNS</Text>
            {[
              "All Things Bright and Beautiful",
                "Jerusalem",
                "Lord of all Hopefulness",
                "The Lord's My Shepherd",
                "Guide me O Thou Great Redeemer",
                "Abide with Me",
                "Love Divine, All Loves Excelling",
                "Morning Has Broken",
                "I Vow to Thee, My Country",
                "Now Thank We All Our God",
                "Praise My Soul the King of Heaven",
                "Thine be the Glory",
                "Lord of the Dance",
                "Immortal, Invisible, God only Wise",
                "Come Down, O Love Divine",
            ].map((piece) => (
              <Text
                key={piece}
                variant="body-default-s"
                onBackground="neutral-weak"
              >
                {piece}
              </Text>
            ))}
            <Text variant="label-strong-m" onBackground="neutral-weak" style={{ textDecoration: "underline" }}>MUSIC ON DEPARTURE</Text>
            {[
              "Jesu, Joy of Man's Desiring - Bach",
                "Nimrod from Enigma Variations - Elgar",
                "Largo from Symphony No. 9 - Dvořák",
                "Air from Suite No. 3 - Bach",
                "Wachet Auf, ruft uns die Stimme - Bach",
                "Prelude in C Minor BWV 546 - Bach",
                "Chorale Prelude on Rhosymedre - Vaughan Williams",
                "Elegy - Thalben-Ball",
                "Hear my Prayer (O for the Wings of a Dove) - Mendelssohn",
                "O Mensch, bewein' dein' Sünde groß BWV 622 - Bach",
                "Ave verum corpus - Mozart",
            ].map((piece) => (
              <Text
                key={piece}
                variant="body-default-s"
                onBackground="neutral-weak"
              >
                {piece}
              </Text>
            ))}


          </Column>

        </Row>
      </Flex>

      <Line />

      {/* ── CONTACT FORM ── */}
      <Flex direction="column" gap="l" fillWidth maxWidth={560}>
        <Heading variant="heading-strong-l">Book the Organist</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Whether you have a date in mind or are still in the early stages 
          of planning, feel free to reach out. I'll get back to you within 
          48 hours.
        </Text>

        {sent ? (
          <Flex
            padding="l"
            radius="m"
            border="neutral-alpha-weak"
            direction="column"
            gap="s"
          >
            <Heading variant="heading-strong-s">Message received</Heading>
            <Text variant="body-default-m" onBackground="neutral-weak">
              Thank you for getting in touch. I'll be in contact shortly.
            </Text>
          </Flex>
        ) : (
          <Flex direction="column" gap="m">
            <Input
              id="name"
              label="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              id="email"
              label="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
            id="occasion"
            label="Occasion (e.g. wedding, funeral, concert)"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            />
            <Input
            id="date"
            label="Date (if known)"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            />
            <Textarea
              id="message"
              label="Tell me a little more"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              label="Send enquiry"
              onClick={handleSubmit}
              fillWidth
            />
          </Flex>
        )}
      </Flex>

    </Flex>
  );
}