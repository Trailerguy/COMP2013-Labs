import type { ResortListing } from "../data/data";

export default function ResortCard(props: ResortListing) {
    return <div className="ResortCard">
        <img src={props.pic}
        alt=""
        width="50px"
        />
        <p className="ResortCountryText">{props.country}</p>
        <p className="ResortLocationText">{props.location}</p>
        <p style={{color:"red"}}>{props.rating}★</p>
        <p className="ResortPrice">${props.price}</p>
    </div>
}