// Bullet geometry from the resume PDF: the "•" sits 5pt in from the margin
// and the text starts 14pt in.
const BulletList = ({ items, className = "" }) => (
  <ul className={`space-y-[2.8px] ${className}`}>
    {items.map((item, index) => (
      <li
        key={index}
        className="relative pl-[14pt] before:absolute before:left-[5pt] before:content-['•']"
      >
        {item}
      </li>
    ))}
  </ul>
);

export default BulletList;
