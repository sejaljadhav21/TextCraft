export default function About(props) {
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'black' : 'white'
    }

    return (
        <div className='container' style={myStyle}>
            <h2 className='my-3'>About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze Your Text with Ease
                            </strong>
                        </button>
                    </h2>
                    <div id="collapseOne" style={myStyle} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextCraft is designed to help you analyze your text quickly and efficiently. Whether you need to count words, characters, or determine the estimated reading time, TextCraft provides accurate results with just a few clicks. You can effortlessly <strong>convert text to uppercase or lowercase, capitalize sentences, and remove extra spaces </strong> to clean up your content. Need to identify links? Our <strong>link extraction </strong> feature makes it simple. Plus, you can <strong>copy text</strong> with one click and use the <strong>preview</strong> feature to see your edits in real time.

                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free of Cost, Always
                            </strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" style={myStyle} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextCraft is completely free to use! Our character counter tool offers instant word and character count statistics for any given text. It’s perfect for writers, students, and professionals who need to meet specific word or character limits.

                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Fully Browser Compatible
                            </strong>
                        </button>
                    </h2>
                    <div id="collapseThree" style={myStyle} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            No matter which browser you use Chrome, Firefox, Internet Explorer, Safari, or Opera.TextCraft works seamlessly. It’s versatile enough to count characters in social media posts, blogs, books, Excel documents, PDF files, essays, and more.

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
