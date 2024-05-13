

const SectionTittle = ({heading,Subheading}) => {
    return (
        <div className=" w-4/12 mx-auto py-4 mb-4">
           <p className="text-3xl text-yellow-600 p-2 text-center">---{Subheading}--- </p> 
           <h3 className="text-4xl text-center uppercase border-y-4 p-4">{heading} </h3>
        </div>
    );
};

export default SectionTittle;