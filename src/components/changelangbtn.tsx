import '../styles/changelang.css'
function Lang() {

    return (<>
        <div id='list'>
            <div className="lang">
                <button className="lang-btn__button">EN
                    <img src="https://flagcdn.com/us.svg" alt="US Flag" style={{ width: '20px', marginRight: '8px', marginLeft: '8px' }} />
                </button>
            </div>
            <div className="lang">
                <button >FR
                    <img src="https://flagcdn.com/fr.svg" alt="France Flag" style={{ width: '20px', marginLeft: '8px', marginRight: '8px' }} />
                </button>
            </div >
            <div className="lang">
                <button >AR
                    <img src="https://flagcdn.com/ma.svg" alt="France Flag" style={{ width: '20px', marginLeft: '8px', marginRight: '8px' }} />
                </button>
            </div>
        </div>
        <div className="langlist">
            <div id="firstLang">FR
            <img src="https://flagcdn.com/fr.svg" alt="France Flag" style={{ width: '20px', marginLeft: '8px', marginRight: '8px' }} /></div>
            <div id="scendLang">EN
            <img src="https://flagcdn.com/us.svg" alt="US Flag" style={{ width: '20px', marginRight: '8px', marginLeft: '8px' }} /></div>
        </div>
    </>
    )
}
export default Lang;