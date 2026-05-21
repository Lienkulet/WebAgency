export interface Testimonial {
    name: string;
    role: string;
    quote: string;
}

export const testimonials: Testimonial[] = [
    {
        name: "Sarah Chen",
        role: "CEO, Luminary",
        quote: "A complete rebuild in under two weeks. The design was sharper than anything we'd briefed an agency on before — and it went live before our competitor even responded to their RFP.",
    },
    {
        name: "Marcus Webb",
        role: "Head of Growth, Arcline",
        quote: "Conversions up 4x in the first month. We'd worked with three agencies before and never seen results like this. The team genuinely understood what we were trying to achieve.",
    },
    {
        name: "Elena Voss",
        role: "Brand Director, Helix",
        quote: "They understood our brand at a level most agencies never reach, even after months of briefings. The output was extraordinary — like having a senior creative director who actually listens.",
    },
];