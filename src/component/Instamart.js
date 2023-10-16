import { useState } from "react";

const Section = ({title,description,isvisible,setvisible}) => {
    // const [isvisible,setvisible] = useState(false);
    return(
        <div className="p-4 m-2 border border-black bg-red-500 text-gray-100">
        <h3 className="text-2xl font-bold">{title}</h3>
        {
         isvisible ? ( <button onClick={()=> setvisible(false)} className="cursor-pointer text-black underline">
            Hide</button> 
            ): (<button onClick={()=> setvisible(true)} className="cursor-pointer text-black underline">show</button>)
        }
        {isvisible && <p >{description}</p>}
        </div>
    );
};
const Instamart = () => {
   const [visibleSection,setIsVisibleSection] = useState("about")

    return(
        <div>
            <h1 className="text-4xl p-2 m-4 font-bold">Instamart</h1>
            <Section 
            title={"About Sazzad"}
            description={"Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph."}
            isvisible ={visibleSection === "about"}
            setvisible={() => setIsVisibleSection("about")}
            />
              <Section 
            title={"Team Sazzad"}
            description={"Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph."}
            isvisible={visibleSection === "team"}
            setvisible={() => setIsVisibleSection("team")}
            />
              <Section 
            title={"Carrers Sazzad"}
            description={"Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph."}
            isvisible={visibleSection === "carrers"}
            setvisible={() => setIsVisibleSection ("carrers")}
            />
 
            
            
                {/* <AboutInstaMart />
                <DetailInstaMart />
                <TeamInstamart />
                <Product/>
                <Carrers/> */}
        </div>
    )
}
export default Instamart;