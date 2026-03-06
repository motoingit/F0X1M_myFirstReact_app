
export default function About(props) {

  return (

    <div className={`accordion text-${props.mode}`} id="accordionExample"  >

        <h1 class="my-2">About Us</h1>
    
        <div className={`accordion-item text-${props.mode}`}  style={{color: props.mode === "light" ? "black" : "white", backgroundColor: props.mode === "light" ? "white" : "grey"}} >
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{color: props.mode === "light" ? "black" : "white", backgroundColor: props.mode === "light" ? "white" : "black"}}>
                Accordion Item #1
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by de transition does limit overflow.
                </div>
            </div>
        </div>
        <div className="accordion-item"  style={{color: props.mode === "light" ? "black" : "white", backgroundColor: props.mode === "light" ? "white" : "grey"}} >
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{color: props.mode === "light" ? "black" : "white", backgroundColor: props.mode === "light" ? "white" : "black"}}>
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                he transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item"  style={{color: props.mode === "light" ? "black" : "white", backgroundColor: props.mode === "light" ? "white" : "grey"}}>
            <h2 className="accordion-header" id="headingThree" >
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{color: props.mode === "light" ? "black" : "white", backgroundColor: props.mode === "light" ? "white" : "black"}}>
                Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is though the transition does limit overflow.
            </div>
            </div>
        </div>
    </div>
  )
}
