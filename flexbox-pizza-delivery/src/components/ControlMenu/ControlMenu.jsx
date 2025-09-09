import "./ControlMenu.css"


export default function(){
    return(
        <section className="control-menu">
            <div className="control-menu__header">
                <h2 className='header__title'>Flexbox Pizza Delivery</h2>
            </div>
            <div className="control-menu__body">
                <div className="body__text"></div>
                <div className="body__code-input-container">
                    <textarea className='body__code-input'/>
                </div>
            </div>

        </section>
    )
}