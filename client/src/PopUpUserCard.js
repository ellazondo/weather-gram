export default function PopUpUserCard ({ userOutfit }) {
    return (
        <>
        <li className="w-1/4 p-4" >
            <img className="rounded-lg" src={userOutfit.outfit_img} alt={userOutfit.name} /> 
        </li>
        </>
        

    );
}