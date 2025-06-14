
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface Note {
  id: number;
  text: string;
  timestamp: Date;
}

const Guestbook = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState("");
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newNote.trim()) {
      const note: Note = {
        id: Date.now(),
        text: newNote.trim(),
        timestamp: new Date()
      };
      setNotes([note, ...notes]);
      setNewNote("");
      setShowForm(false);
      toast({
        title: "Note added! 💕",
        description: "Thank you for leaving a memory.",
      });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blush-50 to-cream-100 py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl italic text-mauve-800 mb-6">
            Leave a Note
          </h2>
          <Button
            onClick={() => setShowForm(!showForm)}
            variant="outline"
            className="border-blush-300 text-blush-600 hover:bg-blush-50 font-poppins"
          >
            {showForm ? "Close" : "Write something sweet"}
          </Button>
        </div>

        {showForm && (
          <div className="mb-16 animate-float-in">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <Input
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  placeholder="Share a thought, memory, or wish..."
                  className="mb-4 border-blush-200 focus:border-blush-400 font-poppins"
                  maxLength={100}
                />
                <div className="flex justify-between items-center">
                  <span className="text-xs text-mauve-500 font-poppins">
                    {newNote.length}/100
                  </span>
                  <Button
                    type="submit"
                    className="bg-blush-400 hover:bg-blush-500 text-white font-poppins"
                    disabled={!newNote.trim()}
                  >
                    Leave Note 💕
                  </Button>
                </div>
              </div>
            </form>
          </div>
        )}

        {/* Floating notes gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {notes.map((note, index) => (
            <div
              key={note.id}
              className="animate-float-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white p-6 rounded-lg shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300 border-4 border-white">
                <p className="font-poppins text-mauve-700 mb-4 italic">
                  "{note.text}"
                </p>
                <div className="text-xs text-mauve-500 font-poppins text-right">
                  {note.timestamp.toLocaleDateString()}
                </div>
                <div className="text-center mt-2 text-blush-400">♡</div>
              </div>
            </div>
          ))}
        </div>

        {notes.length === 0 && (
          <div className="text-center py-16">
            <p className="font-poppins text-mauve-500 italic">
              No notes yet... be the first to leave a memory! 💕
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-20 pt-8 border-t border-blush-200">
          <p className="font-playfair text-lg italic text-mauve-600 mb-2">
            Made with ♡ and hope
          </p>
          <p className="font-poppins text-sm text-mauve-500">
            Sometimes the best stories are the ones we're brave enough to tell.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guestbook;
