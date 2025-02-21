export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <footer className="stats">
        <p>
          <em>Add Items to the list to get ready for the adventure! 🚀</em>
        </p>
      </footer>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {" "}
        {percentage === 100
          ? `You packed everything on list. Ready to Go! ✈`
          : `💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
