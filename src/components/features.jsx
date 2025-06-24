import { useRef, useState } from "react"

const Card=({src,title,description})=>{
    return(
        <div className="relative size-full">
            <video
            src={src}
            loop
            muted
            autoPlay
            className="absolute left-0 top-0 size-full object-cover
            object-center"
            />
            <div className="relative z-10 flex flex-col
            justify-between p-5 text-blue-50">
                <h1 className="bento-title special-font">{title}</h1>
                {description&&(
                    <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
                )}
            </div>
        </div>
    )
}

const Tilt=({children, className = ''})=>{
    const [transformStyle,setTransformStyle]=useState('');
    const itemRef=useRef(null);
    const handleMouseMove=(e)=>{
        if(!itemRef.current) return;

        const{left,top,width,height}=itemRef.current.getBoundingClientRect();

        const relativeX=(e.clientX-left)/width
        const relativeY=(e.clientY-top)/height

        const tiltX=(relativeY-0.5)*5
        const tiltY=(relativeX-0.5)*-5

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.98, .98, .98)`
        
        setTransformStyle(newTransform)
    }

    const handleMouseLeave=()=>{
        setTransformStyle('')
    }
    return(
        <div className={className} ref={itemRef}
        onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
        style={{transform:transformStyle}}>
            {children}
        </div>
    )
}


const Features = () => {
  return (
    <section className="bg-black pb-20">
        <div className="container mx-auto px-3 md:px-10">
            <div className="px-5 py-32">
                <p className="font-circular-web text-lg text-blue-50">Into the MetaGame Layer</p>
            
            <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
                Immerse yourself in a rich and ever-expanding universe where a vibrant array of products
                converge into an interconnected overlay experience on your world.
            </p>
            </div>
        
        <Tilt className="border-hsla relative mb-7 h-96 w-full
        overflow-hidden rounded-md md:h-[65vh]">
            <Card 
            src="videos/feature-1.mp4"
            title={
                <>radiant</>
            }
            description="A cross-platform metagate app,turning your activities across Web2 and 
            Web3 games into a rewarding adventure."
            />
        </Tilt>
        
        <div className="grid h-[100dvh] grid-cols-2 grid-rows-2 gap-7">
            <Tilt className="bento-tilt_1 row-span-1 md:col-span-1
            md:row-span-2">
                <Card
                src='videos/feature-2.mp4'
                title={<>Zigma</>}
                description="An anime and gaming-inspired NFT collection - the IP primed for expansion
                "
                />
            </Tilt>
            <Tilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
                <Card
                src='videos/feature-3.mp4'
                title={<>nexus</>}
                description='A gamified social hub, adding a new dimention of play to social
                interaction for web3 communities.'
                />

            </Tilt>
            <Tilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
                <Card
                src='videos/feature-4.mp4'
                title={<>Azul</>}
                description='A cross-world AI agent - elevating
                your gameplay to be more fun and productive.'
                />
            </Tilt>
        </div>
        </div>
    </section>
  );
};

export default Features;