import { AspectRatio, Box } from "@chakra-ui/react";

export function LocationMap() {
  return (
    <Box p={[0, 4, 8]} m="auto" maxW={1200} bgColor="white">
      <AspectRatio ratio={16 / 9} p={[0, 4, 8]} m="auto" maxW={1200}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2121.621463267121!2d11.975672776667082!3d57.87562512652332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464560bd9cfaa135%3A0x2a6f5d3cd0e5db8f!2sSelma%20Lagerl%C3%B6fs%20gata%205%2C%20442%2049%20Kung%C3%A4lv!5e0!3m2!1ssv!2sse!4v1670076193591!5m2!1ssv!2sse"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </AspectRatio>
    </Box>
  )
}
