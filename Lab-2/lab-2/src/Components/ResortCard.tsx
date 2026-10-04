import type { ResortListing } from "../data/data";

export default function ResortCard(props: ResortListing) {
    return <div className="ResortCard">
        <img src={props.pic}
        alt=""
        width="100px"
        />
        <p className="ResortCountryText">{props.country}</p>
        <p className="ResortLocationText">{props.location}</p>
        <p style={{color:(props.rating > 4) ? "green" : "red"}}>{props.rating}★</p>
        <p className="ResortPrice">${props.price}/per night</p>
    </div>
}