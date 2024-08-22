import Explosion from "../../assets/images/Explosion.png"

const ImportantWord = ({ children, isExplosion = false }) => {
    return (
        <div className={`flex items-end ${isExplosion === true ? "h-20" : ""}`}>
            <div className="min-w-28 h-fit px-5 py-2 flex justify-center text-white text-2xl font-bold bg-importantWord" style={{ backgroundSize: "100% 100%" }}>
                {children}
            </div>
            {isExplosion === true ? <img className="w-12 h-12 relative -top-10 left-2" src={Explosion} alt="Explosion" /> : null}
        </div>
    )
}

export default ImportantWord
