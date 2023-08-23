"use client";
import { FormattedPost } from "@/app/(shared)/types";
import React, { useState } from "react";
import { XMarkIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Sociallinks from "@/app/(shared)/Sociallinks";
import { Editor, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import EditorMenuBar from "./EditorMenuBar";

type Props = {
  post: FormattedPost;
};

const Content = ({ post }: Props) => {
  const [isEditable, setisEditable] = useState<boolean>(false);

  const [title, setTitle] = useState<string>(post.title);
  const [titleError, setTitleError] = useState<string>("");

  const [content, setContent] = useState<string>(post.content);
  const [contentError, setContentError] = useState<string>("");

  const handleIsEditable = (bool: boolean) => {
    setisEditable(bool);
    editor?.setEditable(bool);
  };

  const handleOnChangeContent = ({ editor }: any) => {
    if (!(editor as Editor).isEmpty) setContentError("");
    setContent((editor as Editor).getHTML());
  };

  const editor = useEditor({
    extensions: [StarterKit],
    onUpdate: handleOnChangeContent,
    content: content,
    editable: isEditable,
  });

  const handleSubmit = () => {};
  console.log(post);

  return (
    <div className="prose w-full max-w-full mb-10">
      {/* BREADWRUMBS */}
      <h5 className="text-wh-300">{`Home > ${post.category} > ${post.title}`}</h5>
      {/* CATEGORY AND EDIT */}
      <div className="flex justify-between items-center">
        <h4 className="bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold">
          {post.category}
        </h4>
        <div className="mt-4">
          {isEditable ? (
            <div className="flex justify-between gap-3">
              <button onClick={() => handleIsEditable(!isEditable)}>
                <XMarkIcon className="h-6 w-6 text-accent-red" />
              </button>
            </div>
          ) : (
            <button onClick={() => handleIsEditable(!isEditable)}>
              <PencilSquareIcon className="h-6 w-6 text-accent-red" />
            </button>
          )}
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        {/* HEADER */}
        <>
          {isEditable ? (
            <div>
              <textarea
                className="border-2 rounded-md bg-wh-50 p-3 w-full"
                placeholder="Title"
                onChange={(e) => console.log("change title", e.target.value)}
                value={title}
              />
            </div>
          ) : (
            <h3 className="font-bold text-3xl mt-3">{title}</h3>
          )}
          <div className="flex gap-3">
            <h5 className="font-semibold text-xs">By {post.author}</h5>
            <h6 className="text-wh-300 text-xs">{post.createdAt}</h6>
          </div>
        </>

        {/* IMAGE */}
        <div className="relative w-auto mt-2 mb-16 h-96">
          <Image
            fill
            alt={post.title}
            src={post.image}
            sizes="(max-width: 480px) 100vw,
                  (max-width: 768px) 85vw,
                  (max-width: 1060px) 75vw,
                  60vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div
          className={
            isEditable
              ? "border-2 rounded-md bg-wh-50 p-3"
              : "w-full max-w-full"
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

        {/* SUBMIT BUTTON */}
        {isEditable && (
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-accent-red hover:bg-wh-500 text-wh-10 font-semibold py-2 px-5 mt-5"
            ></button>
          </div>
        )}
      </form>

      {/* SOCIAL LINS */}
      <div className="hidden md:block mt-10 w-1/3">
        <Sociallinks isDark />
      </div>
    </div>
  );
};

export default Content;
