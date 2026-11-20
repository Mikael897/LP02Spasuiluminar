import { describe, expect, it } from "vitest";

import { WHATSAPP_NUMBER, whatsappLink } from "./whatsapp";

describe("WhatsApp links", () => {
  it("uses the configured number and the site contact message", () => {
    expect(WHATSAPP_NUMBER).toBe("5551994102121");
    expect(whatsappLink()).toBe(
      "https://wa.me/5551994102121?text=Ol%C3%A1!%20Conheci%20o%20SpaSu%20Iluminar%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20atendimentos.",
    );
  });
});
