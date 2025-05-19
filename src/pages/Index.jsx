
import { useState, useEffect } from "react";
import { Book, BookOpen } from "lucide-react";
import PoemForm from "../components/PoemForm";
import PoemList from "../components/PoemList";

const initialPoems = [
  {
    id: "1",
    title: "The Road Not Taken",
    content: "Two roads diverged in a yellow wood,\nAnd sorry I could not travel both\nAnd be one traveler, long I stood\nAnd looked down one as far as I could\nTo where it bent in the undergrowth;",
    isRead: false
  },
  {
    id: "2",
    title: "Hope is the thing with feathers",
    content: "Hope is the thing with feathers\nThat perches in the soul,\nAnd sings the tune without the words,\nAnd never stops at all,",
    isRead: false
  }
];

const Index = () => {
  const [showForm, setShowForm] = useState(false);
  const [poems, setPoems] = useState(initialPoems);

  useEffect(() => {
    // This runs once when the component mounts
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((json) => {
        console.log(json);
        setPoems(json); // set your data here
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }, []);

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  const handleAddPoem = (newPoem) => {
    setPoems([newPoem, ...poems]);
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: newPoem.title,
        body: newPoem.body,
      })
    })
    .then(res => {
      if (!res.ok) throw new Error('Network error');
      return res.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
    setShowForm(false);
  };

  const handleToggleRead = (id) => {
    setPoems(poems.map(poem => 
      poem.id === id ? { ...poem, isRead: !poem.isRead } : poem
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-3xl mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Journal Entries</h1>
          <p className="text-muted-foreground mb-6">Create and Read your favorite Journals</p>
          
          <button onClick={handleToggleForm} className="btn">
            {showForm ? (
              <>
                <Book />
                Hide Form
              </>
            ) : (
              <>
                <BookOpen />
                Create New Journal
              </>
            )}
          </button>
        </header>

        {showForm && (
          <div className="mb-8">
            <PoemForm onAddPoem={handleAddPoem} />
          </div>
        )}

        <main>
          <PoemList poems={poems} onToggleRead={handleToggleRead} />
        </main>
      </div>
    </div>
  );
};

export default Index;
