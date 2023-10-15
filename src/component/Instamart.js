import { useState } from "react"

const Section = ({title,description}) => {
    const[isVisible,setIsVisible] = useState(false);
    return(
        <div className="border border-black p-2 m-2">
            <h3 className="font-bold text-2xl  text-center">{title}</h3>
            
            {isVisible ?(
             <button onClick={() => setIsVisible(false)}
            className="cursor-pointer underline text-slate-800"
            >
                Hide
                </button>   
            ) : (
                <button onClick={() => setIsVisible(true)}
            className="cursor-pointer underline text-slate-800"
            >Show</button>
            )}
            
            {isVisible && <p>{description}</p>}

        </div>
        
    );
};
    
const Instamart = () => {
    return(
        <div>
            <h1 className="font-bold text-4xl m-2 p-2">Instamart</h1>
            <Section 
            title={"Namaste Sazzad"}
             description={"This is the about section of description"} 
            />
            <Section 
            title={"Hello Sazzad"}
             description={"This is the about section of description and this team has 50 members"} 
            />
            <Section 
            title={"Carrier"}
             description={"If men were rational in their conduct, that is to say, if they acted in the way most likely to bring about the ends that they deliberately desire, intelligence would be enough to make the world almost a paradise. In the main, what is in the long run advantageous to one man is also advantageous to another. But men are actuated by passions which distort their view; feeling an impulse to injure others, they persuade themselves that it is to their interest to do so. They will not, therefore, act in the way which is in fact to their own interest unless they are actuated by generous impulses which make them indifferent to their own interest. This is why the heart is as important as the head. By the “heart” I mean, for the moment, the sum-total of kindly impulses. Where they exist, science helps them to be effective; where they are absent, science only makes men more cleverly diabolic. "} 
            />
           {/* <AboutInstaMart/>
           <DetailsofInstamart/>
           <TeamInstamart/>
           <Product/>
           <Carreers/>  */}
        </div>
    )
}
export default Instamart;