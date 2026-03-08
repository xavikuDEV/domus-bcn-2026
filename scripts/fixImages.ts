import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function fixImages() {
  const { data: inmuebles, error } = await supabase.from('inmuebles').select('id, fotos');
  if (error) {
    console.error("Error fetching", error);
    return;
  }

  for (const inv of inmuebles) {
    let changed = false;
    const newFotos = inv.fotos.map((f: string) => {
      // If it contains the failing photo or plus.unsplash
      if (f.includes('1541885061690-e223aaed42d0') || f.includes('plus.unsplash.com') || f.includes('images.unsplash.com')) {
        changed = true;
        // replace with a known working architectural image on unsplash:
        return 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80';
      }
      return f;
    });

    if (changed) {
      const { error: updateErr } = await supabase.from('inmuebles').update({ fotos: newFotos }).eq('id', inv.id);
      if (updateErr) console.error("Update error", inv.id, updateErr);
      else console.log("Updated", inv.id);
    }
  }
  console.log("Done fixing images");
}

fixImages();
