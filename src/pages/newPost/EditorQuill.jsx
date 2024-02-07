import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageResize from "quill-image-resize-module-react";
import "react-quill/dist/quill.snow.css";

Quill.register("modules/imageResize", ImageResize);

const modules = {
  toolbar: [
    [{ header: 1 }, { header: [1, 2, 3, 4, 5, 6, false] }],
    [{size: []}],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ color: [] }],
    [{ align: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  imageResize: {
    parchment: Quill.import("parchment"),
    modules: ["Resize", "DisplaySize"],
  },
};

const EditorQuill = ({ content, setContent }) => {
  return (
    <div className="new-post__editor" content={content}>
      <ReactQuill
        theme="snow"
        placeholder="Escribe aquí el contenido"
        value={content}
        onChange={setContent}
        modules={modules}
      />
    </div>
  );
};

export default EditorQuill;
