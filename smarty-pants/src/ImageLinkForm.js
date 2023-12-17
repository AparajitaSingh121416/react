import React from "react";


const ImageLinkForm= () =>{
    return(
        <div className="shadow-3 br2">
            <p className="f3">
                {'This magic brain will detect faces in your pictures. Give it a try!'}
            </p>
            <div style={{width:700, display:'flex', justifyContent:'center', marginLeft:270}} >
                <input className='f4 pa2 w-70 center' type="text"/>
                <button className="w-30 grow f4 link pv2 bg-light-blue ">Detect</button>
            </div>
            
        </div>

    );
}

export default ImageLinkForm;