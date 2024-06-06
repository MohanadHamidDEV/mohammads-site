import React from "react";
import "../css/Card.css";
// import cardCover from "../../../assets/images/programming_2.jpg";

// const cardTitle = "Developer";
const description =
    "أن شاسعة الصعداء البشريةً لها. قام مع أمدها والإتحاد, في عدم حكومة وباءت, بها كل أمام الإمتعاض. قد أساسي اليابان، لها, ";
const details =
    "أن شاسعة الصعداء البشريةً لها. قام مع أمدها والإتحاد, في عدم حكومة وباءت, بها كل أمام الإمتعاض. قد أساسي اليابان، لها,أن شاسعة الصعداء البشريةً لها. قام مع أمدها والإتحاد, في عدم حكومة وباءت, بها كل أمام الإمتعاض. قد أساسي اليابان، لها,أن شاسعة الصعداء";

function Card(props) {
    return (
        // <div className="card ar-lang">
        //     <div className="card-image-title-container">
        //         <img className="card-cover" src={props.image} alt="cover" />
        //         <div className="card-title ar-lang">
        //             <h2>{props.title}</h2>
        //         </div>
        //     </div>

        //     <div className="description">
        //         <p>{description}</p>
        //     </div>
        //     <hr />
        //     <div className="details ar-lang">
        //         <p>{details}</p>
        //     </div>
        //     <div className="card-button-container">
        //         <input type="submit" value="More details" />
        //     </div>
        // </div>
        <div className="card-container">
            <div className="card ar-lang">
                <img src={props.image} width="420px" alt="card-cover" />
                <div className="card-content">
                    <h2 className="card-title ar-lang">.ينام الألم في بعض الأحيان ونظراً للالتزامات</h2>
                    <div className="rtl-hr">
                        <hr />
                    </div>
                    <p className="description">
                        لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار النشوة وتمجيد الألم نشأت بالفعل، وسأعرض
                        لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة،
                        ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية
                        فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام،
                        الألم هو الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي
                    </p>
                    <div className="ltr-hr">
                        <hr />
                    </div>
                    <div className="button-container">
                        <input type="submit" className="submit-btn" value="See More.."/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
