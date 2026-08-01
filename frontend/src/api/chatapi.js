const API_BASE= import.meta.env?.VITE_API_URL



export async function AI_Chat(query){
    try{
        const res= await fetch(`${API_BASE}/AI/reply`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({query:query}),
        });

         if (!res.ok) {
      throw new Error(`API error (${res.status})`);
    }
    const data = await res.json();
    console.log(data.Reply)
    return  data.Reply || 'No response generated.';
    }catch(err){
        console.warn('Backend unavailable, using simulated response:', err);
    await new Promise((r) => setTimeout(r, 1200));
    return "What you are asking is out of my capability ";
    }
}