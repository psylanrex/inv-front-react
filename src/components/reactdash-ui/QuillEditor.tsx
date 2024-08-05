import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type QuillEditorProps = {
  value?: ReactQuill.Value;
  onChange?: (value: string) => void;
  readOnly?: boolean;
};

const QuillEditor: React.FC<QuillEditorProps> = (props) => {
  return (
    <div className="mb-6 [&_.ql-editor]:min-h-[240px] [&_.ql-snow]:border-gray-200 dark:[&_.ql-snow]:border-gray-700 ">
      <ReactQuill
        readOnly={props.readOnly}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default QuillEditor;
