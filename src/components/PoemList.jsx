
import PoemCard from "./PoemCard";

const PoemList = ({ poems, onToggleRead }) => {
  if (poems.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No Journals yet. Create one to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {poems.map((poem) => (
        <PoemCard 
          key={poem.id} 
          poem={poem} 
          onToggleRead={onToggleRead} 
        />
      ))}
    </div>
  );
};

export default PoemList;
