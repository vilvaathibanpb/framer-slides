import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  useActiveCode,
} from "@codesandbox/sandpack-react";
import { autocompletion, completionKeymap } from "@codemirror/autocomplete";

const Editor = () => {
  const { code, updateCode } = useActiveCode('')

  return (
    <SandpackCodeEditor
      style={{
        background: "black!important",
        height: "50vh",
        width: "30vw",
      }}
      defaultValue={code}
      onChange={updateCode}
      className="mr-20 bg-black"
      extensions={[autocompletion()]}
        extensionsKeymap={[completionKeymap]}
    />
  );
};

export default Editor;