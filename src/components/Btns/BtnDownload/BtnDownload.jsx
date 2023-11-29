import { saveAs } from "file-saver"
import { useTranslation } from "react-i18next";


const BtnDownload = () => {

  const { t } = useTranslation();

  const saveFile = () => {
    saveAs(
      "/ramin-majidi.pdf",
      "ramin-majidi.pdf"
    );
  };

  return (
    <button
      onClick={saveFile}
      className={`overflow-hidden outline-none relative group 
        cursor-pointer flex items-center justify-center w-[12rem] h-12 my-6  
        bg-transparent rounded-full border border-[var(--color-primary)]`}>
      <span className="z-50 text-xl group-hover:text-[#f2f2f2]
      group-focus:text-[#f2f2f2] ">
        {t("btns.btnDownload")}
      </span>
      <span
        className="inline-block absolute left-0 w-0 h-12 transition-all
           duration-500 group-hover:w-full group-hover:bg-[var(--color-primary)]
            group-focus:w-full group-focus:bg-[var(--color-orange)]" >
      </span>
    </button>
  )
}

export default BtnDownload