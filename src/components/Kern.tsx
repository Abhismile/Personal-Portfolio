// Old Standard TT leaves a wide gap between "n" and "T"; tuck the T in wherever "FinTech" is set in the display face.
export default function Kern({ text }: { text: string }) {
  const parts = text.split('FinTech');
  return (
    <>
      {parts.map((p, i) => (
        <span key={i}>
          {p}
          {i < parts.length - 1 && <>Fin<span className="kern-t">T</span>ech</>}
        </span>
      ))}
    </>
  );
}
