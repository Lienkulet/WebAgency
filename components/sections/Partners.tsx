export default function Partners() {
  const partners = [''];

  return (
    <section
      className="flex flex-col items-center section-px relative z-10"
      style={{ marginTop: "-120px", paddingBottom: "80px" }}
    >
      <div
        className="liquid-glass rounded-full inline-block"
        style={{ padding: "4px 14px", marginBottom: "40px" }}
      >
        <span
          style={{
            fontFamily: "'Barlow', sans-serif",
            color: "rgba(255,255,255,0.7)",
            fontSize: "12px",
            fontWeight: 500,
          }}
        >
          Trusted by the teams behind
        </span>
      </div>

      <div className="flex items-center flex-wrap justify-center" style={{ gap: "48px" }}>
        {partners.map((name) => (
          <span
            key={name}
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
              fontSize: "clamp(1.5rem, 3vw, 1.875rem)",
              color: "#fff",
            }}
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
