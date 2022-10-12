const Footer = () => {

    const onPrint = () => {
        window.print()
    }
    return (
        <div className="modal-footer">
           <button className="footer-btn" onClick={onPrint}> Download</button>
        </div>
    )
}

export default Footer

