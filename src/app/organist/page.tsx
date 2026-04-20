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
        s={{ direction: "column", horizontal: "center" }}
        >
        <Flex
          direction="column"
          gap="m"
          style={{ flex: 1, minWidth: "280px", maxWidth: "50%" }}
        >
        <Heading
          variant="display-strong-m"
          s={{ style: { textAlign: "center", width: "100%" } }}
        >
         The Wandering Organist
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          Welcome to the website of <b>'Chidi the Wandering Organist'</b> .
        </Text>
        <Text variant="body-default-m" onBackground="neutral-weak">
          I am a classical and choral organist, composer, music director, and YouTuber,
          based at St Peter's Catholic Church in Leicester. I travel across the United Kingdom
          and beyond, playing for weddings, funerals, organ inaugurations, and concerts
          at churches, cathedrals, and venues across the country.
        </Text>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Below you will find my repertoire for weddings and funerals, and a form
          to get in touch about bookings.
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
    I have been playing the organ for about fifteen years. It was a journey that began
    with jazz and blues piano, moved through contemporary and classical piano,
    and eventually found its home in classical organ.
  </Text>
  <Text variant="body-default-m" onBackground="neutral-weak">
    Over those fifteen years I have played across denominations, styles, and
    settings, from solemn requiem Masses and intimate graveside services, to
    grand wedding processions, gala evenings, company events, and organ
    inauguration recitals when a church receives a new instrument. The one
    constant has been that I arrive prepared, and I
    deliver what each occasion calls for.
  </Text>
  <Text variant="body-default-m" onBackground="neutral-weak">
    I am resident organist at St Peter's Catholic Church on Hinckley Road,
    Leicester, and regularly at Blessed Sacrament Church in Braunstone.
    Beyond Leicester, I travel across the Midlands, the North, and throughout
    England — distance is rarely a barrier if the occasion warrants it.
  </Text>
  <Text variant="body-default-m" onBackground="neutral-weak">
    I am available for weddings, funerals, memorial services, organ recitals,
    concert appearances, liturgical accompaniment, and special events.
    If you have something in mind that doesn't fit neatly into a category,
    get in touch anyway.
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

      {/* ── SUPPORT ── */}
      <Flex
        direction="column"
        gap="m"
        fillWidth
        maxWidth={720}
        padding="l"
        radius="l"
        border="neutral-alpha-weak"
      >
        <Heading variant="heading-strong-m">Support the Music</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          If my playing has meant something to you at a service, through a 
          video, or simply finding this page, you're welcome to show your support. 
          Every contribution helps with travel, recording, and keeping the music going.
        </Text>

        <Row gap="m" wrap>
          <Button
            href="https://liberapay.com/chidiereoluoma"
            prefixIcon="heart"
            label="Support on Liberapay"
            variant="primary"
            target="_blank"
          />
          <Button
            href="https://www.youtube.com/@chidiere_o"
            prefixIcon="play"
            label="Watch on YouTube"
            variant="secondary"
            target="_blank"
            style={{ backgroundColor: "#FF0000", color: "#ffffff", borderColor: "#FF0000" }}
          />
        </Row>
      </Flex>

      <Line />

      {/* ── REPERTOIRE ── */}
      <Flex direction="column" gap="l" fillWidth maxWidth={960}>
        <Heading variant="heading-strong-l"style={{ textAlign: "center" }}>Repertoire</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Below is a selection of pieces I regularly perform for weddings 
          and funerals. Every programme is tailored to your wishes — 
          if there is something specific you have in mind that isn't listed, 
          please do get in touch.
        </Text>

       <Row gap="xl" fillWidth wrap>

  {/* WEDDINGS */}
  <Column
    flex={1}
    gap="m"
    style={{ minWidth: "260px", maxWidth: "100%", wordBreak: "break-word" }}
  >
    <Heading variant="heading-strong-m" style={{ textAlign: "center" }}>Weddings</Heading>
    <Line />

    <Text variant="label-strong-s" onBackground="neutral-weak" style={{ textDecoration: "underline", textAlign: "center"}}>PRELUDE & ARRIVAL</Text>
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
      <Text key={piece} variant="body-default-s" onBackground="neutral-weak" style={{ wordBreak: "break-word" }}>
        {piece}
      </Text>
    ))}

    <Text variant="label-strong-s" onBackground="neutral-weak" style={{ textDecoration: "underline", textAlign: "center" }}>ENTRANCE OF THE BRIDE</Text>
    {[
      "Bridal March from Lohengrin - Wagner",
      "Prince of Denmark's March - Clarke",
      "Air from Suite No. 3 - Bach",
      "Canon in D - Pachelbel",
      "Trumpet Tune - Purcell",
    ].map((piece) => (
      <Text key={piece} variant="body-default-s" onBackground="neutral-weak" style={{ wordBreak: "break-word" }}>
        {piece}
      </Text>
    ))}

    <Text variant="label-strong-s" onBackground="neutral-weak" style={{ textDecoration: "underline", textAlign: "center" }}>HYMNS</Text>
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
      <Text key={piece} variant="body-default-s" onBackground="neutral-weak">
        {piece}
      </Text>
    ))}

    <Text variant="label-strong-s" onBackground="neutral-weak" style={{ textDecoration: "underline", textAlign: "center" }}>SIGNING OF THE REGISTER</Text>
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
      <Text key={piece} variant="body-default-s" onBackground="neutral-weak" style={{ wordBreak: "break-word" }}>
        {piece}
      </Text>
    ))}

    <Text variant="label-strong-s" onBackground="neutral-weak" style={{ textDecoration: "underline", textAlign: "center" }}>RECESSIONAL</Text>
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
      <Text key={piece} variant="body-default-s" onBackground="neutral-weak" style={{ wordBreak: "break-word" }}>
        {piece}
      </Text>
    ))}
  </Column>

  {/* FUNERALS */}
  <Column
    flex={1}
    gap="m"
    style={{ minWidth: "260px", maxWidth: "100%", wordBreak: "break-word" }}
  >
    <Heading variant="heading-strong-m" style={{ textAlign: "center" }}>Funerals & Memorials</Heading>
    <Line />

    <Text variant="label-strong-s" onBackground="neutral-weak" style={{ textDecoration: "underline", textAlign: "center" }}>PROCESSIONAL</Text>
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
      <Text key={piece} variant="body-default-s" onBackground="neutral-weak" style={{ wordBreak: "break-word" }}>
        {piece}
      </Text>
    ))}

    <Text variant="label-strong-s" onBackground="neutral-weak" style={{ textDecoration: "underline", textAlign: "center" }}>HYMNS</Text>
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
      <Text key={piece} variant="body-default-s" onBackground="neutral-weak">
        {piece}
      </Text>
    ))}

    <Text variant="label-strong-s" onBackground="neutral-weak" style={{ textDecoration: "underline", textAlign: "center" }}>COMMITTAL</Text>
    {[
      "Nimrod from Enigma Variations - Elgar",
      "Canon in D - Pachelbel",
      "Adagio in G Minor - Albinoni",
      "Abide with Me (played softly)",
      "Traumerei - Schumann",
      "A Gaelic Blessing - Rutter",
    ].map((piece) => (
      <Text key={piece} variant="body-default-s" onBackground="neutral-weak" style={{ wordBreak: "break-word" }}>
        {piece}
      </Text>
    ))}

    <Text variant="label-strong-s" onBackground="neutral-weak" style={{ textDecoration: "underline", textAlign: "center" }}>MUSIC ON DEPARTURE</Text>
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
      "O Mensch, bewein dein Sünde groß BWV 622 - Bach",
      "Ave verum corpus - Mozart",
    ].map((piece) => (
      <Text key={piece} variant="body-default-s" onBackground="neutral-weak" style={{ wordBreak: "break-word" }}>
        {piece}
      </Text>
    ))}
  </Column>

</Row>
      </Flex>

      <Line />

      {/* ── CONTACT FORM ── */}
      <Flex direction="column" gap="l" fillWidth maxWidth={560}>
        <Heading variant="heading-strong-l" style={{ textAlign: "center" }}>Book the Organist</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak" style={{ textAlign: "center" }}>
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