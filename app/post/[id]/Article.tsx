import { Editor, EditorContent } from "@tiptap/react";
import React from "react";
import EditorMenuBar from "./EditorMenuBar";

type Props = {
  contentError: string;
  isEditable: boolean;
  title: string;
  editor: Editor | null;
  setContent: (content: string) => void;
};

const Article = ({
  contentError,
  isEditable,
  title,
  editor,
  setContent,
}: Props) => {
  if (!editor) {
    return null;
  }
  return (
    <article className="text-wh-500 leading-8">
      <div
        className={
          isEditable ? "border-2 rounded-md bg-wh-50 p-3" : "w-full max-w-full"
        }
      >
        {isEditable && (
          <>
            <EditorMenuBar editor={editor} />
            <hr className="border-1 my-2 mb-5" />
          </>
        )}
        <EditorContent editor={editor} />
      </div>
      {contentError && <p className="mt-1 text-wh-900">{contentError}</p>}
    </article>
  );
};

export default Article;
