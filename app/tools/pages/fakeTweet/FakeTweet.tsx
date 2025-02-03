"use client";

import { useState, useRef, useCallback } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  BookmarkIcon,
  Heart,
  MessageCircle,
  Repeat2,
  Share,
  BadgeCheck,
  Upload,
  CircleX,
  RotateCcw,
} from "lucide-react";
import html2canvas from "html2canvas";
import Image from "next/image";
import avatar from "@/assets/avatar.png";
import verify from "@/assets/icons/varified.svg";

export default function TweetGenerator() {
  const [theme, setTheme] = useState("light");
  const [mode, setMode] = useState<"edit" | "preview">("edit");
  const [username, setUsername] = useState("Tweet Generator");
  const [handle, setHandle] = useState("tweetgenerator");
  const [avatarImage, setAvatarImage] = useState<string | null>(null);
  interface TweetContent {
    text: string;
    image: string | null;
  }
  const [content, setContent] = useState<TweetContent>({
    text: "Hey there, Welcome to tweet generator ✨\n\nYou can edit anything you want by clicking on them\n\nMove to the preview mode from the top bar",
    image: null,
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const tweetCardRef = useRef<HTMLDivElement>(null);
  const tweetIconRef = useRef<HTMLImageElement>(null); 
  const avatarInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      const url = URL.createObjectURL(file);
      setContent((prev) => ({ ...prev, image: url }));
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleImageUpload(file);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const file = e.target.files[0];
      handleImageUpload(file);
      e.target.value = "";
    }
  };

  const handleAvatarSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const file = e.target.files[0];
      handleAvatarUpload(file);
      e.target.value = "";
    }
  };

  const handleTextChange = (value: string) => {
    setContent((prev) => ({ ...prev, text: value }));
  };

  const handleReset = () => {
    setContent({
      text: "Hey there, Welcome to tweet generator ✨\n\nYou can edit anything you want by clicking on them\n\nMove to the preview mode from the top bar",
      image: null,
    });
  };

  const [isDownloading, setIsDownloading] = useState(false);
 
  const handleDownload = useCallback(async () => {
    setIsDownloading(true);
    const previousMode = mode;
    setMode("preview");
    await new Promise((resolve) => setTimeout(resolve, 100));

    if (tweetCardRef.current) {
      try {
        const canvas = await html2canvas(tweetCardRef.current, {
          backgroundColor:
            theme === "dark"
              ? "#111827"
              : theme === "dim"
              ? "#1F2937"
              : "#F9FAFB",
          scale: 2,
          removeContainer: true,
        });

        const image = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = image;
        link.download = "tweet.png";
        link.click();
      } finally {
        setIsDownloading(false);
        setMode(previousMode);
      }
    }
  }, [theme, mode]);
  const handleAvatarUpload = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      const url = URL.createObjectURL(file);
      setAvatarImage(url);
    }
  };

  const handleDelete = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setContent((prev) => ({ ...prev, image: "" }));
  };
  return (
    <div
    >
      <h1 className="text-4xl text-blue-600 text-center mt-4 font-bold max-w-3xl ml-auto mr-auto">Tweet Generator</h1>
      <p className="text-2xl  text-center mt-2 max-w-3xl ml-auto mr-auto">Generate mock screenshots of tweets easily and for free.</p>
      <div className="max-w-xl mx-auto space-y-4">
        <div className="flex justify-between items-center my-4">
          <Tabs
            value={mode}
            onValueChange={(value: "edit" | "preview") => setMode(value)}
            className="w-[200px]"
          >
            <TabsList>
              <TabsTrigger value="edit" className="flex-1">
                Edit
              </TabsTrigger>
              <TabsTrigger value="preview" className="flex-1">
                Preview
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <Card
          className={`p-4 ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : theme === "dim"
              ? "bg-gray-700 border-gray-600"
              : "bg-white border-gray-300"
          } ${isDownloading ? "border-none shadow-none" : ""}`}
          ref={tweetCardRef}
        >
          <div className="flex gap-3">
            <div className="flex gap-3">
              <Avatar
                className="w-12 h-12 cursor-pointer"
                onClick={() => avatarInputRef.current?.click()}
              >
                {avatarImage ? (
                  <Image
                    src={avatarImage}
                    width={100}
                    height={100}
                    alt="Avatar"
                    className="rounded-full"
                  />
                ) : (
                  <Image
                    src={avatar}
                    width={100}
                    height={100}
                    alt="Avatar"
                    className="rounded-full"
                  />
                )}
              </Avatar>
              {mode === "edit" && (
                <input
                  type="file"
                  ref={avatarInputRef}
                  onChange={handleAvatarSelect}
                  accept="image/*"
                  className="hidden"
                />
              )}
            </div>
            <div className="flex-1">
              <div className="flex gap-1">
                {mode === "edit" ? (
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={`font-bold bg-transparent border-none outline-none ${
                      theme !== "light" ? "text-gray-300" : "text-black"
                    }`}
                  />
                ) : (
                  <span
                    className={`font-bold ${
                      theme !== "light" ? "text-gray-300" : "text-black"
                    }`}
                  >
                    {username}
                  </span>
                )}
                <Image
                  src={verify}
                  alt="verified"
                  ref={tweetIconRef}
                  className="w-4 h-4 text-blue-500"
                />
                {mode === "edit" && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`ml-auto ${
                      theme === "dark" && "hover:bg-black"
                    }`}
                    onClick={handleReset}
                  >
                    <RotateCcw
                      className={`w-4 h-4 ${theme === "dark" && "text-white"}`}
                    />
                  </Button>
                )}
              </div>
              <div
                className={`text-sm ${
                  theme !== "light" ? "text-gray-300" : "text-gray-500"
                }`}
              >
                @
                {mode === "edit" ? (
                  <input
                    type="text"
                    value={handle}
                    onChange={(e) => setHandle(e.target.value)}
                    className={`bg-transparent border-none outline-none ${
                      theme !== "light" ? "text-gray-300" : "text-gray-500"
                    }`}
                  />
                ) : (
                  <span
                    className={`${
                      theme !== "light" ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    {handle}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="mt-3 space-y-2">
            {mode === "edit" ? (
              <Textarea
                value={content.text}
                onChange={(e) => handleTextChange(e.target.value)}
                className={`border-none p-0 ${
                  theme !== "light" ? "bg-transparent text-white" : ""
                }`}
                rows={6}
              />
            ) : (
              <p
                className={`whitespace-pre-wrap ${
                  theme !== "light" ? "bg-transparent text-white" : ""
                }`}
              >
                {content.text}
              </p>
            )}

            {mode === "edit" || content.image ? (
              <div
                className={`${
                  mode == "edit" && "border-2 border-dashed"
                } rounded-lg mt-4 text-center cursor-pointer relative flex flex-col items-center justify-center min-h-40`}
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                onClick={() => mode === "edit" && fileInputRef.current?.click()}
              >
                {content.image && (
                  <div className="relative">
                    {mode === "edit" && (
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute right-0"
                        onClick={handleDelete}
                      >
                        <CircleX className="w-5 h-5" />
                      </Button>
                    )}
                    <img
                      src={content.image}
                      alt="Uploaded"
                      className="max-w-full h-auto rounded-sm"
                    />
                  </div>
                )}
                {mode === "edit" && !content.image && (
                  <div
                    className={`flex flex-col items-center gap-2 ${
                      theme !== "light" ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    <Upload className="w-6 h-6" />
                    <span>Drag and drop or click here to add image</span>
                  </div>
                )}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileSelect}
                  accept="image/*"
                  className="hidden"
                />
              </div>
            ) : null}

            <div
              className={`text-sm  py-4  ${
                theme !== "light" ? "text-gray-300" : "text-gray-500"
              }`}
            >
              1:20 PM · Jan 21, 2025 · <span>0</span> Views
            </div>

            <div
              className={`flex gap-4 text-sm py-4 border-y ${
                theme !== "light"
                  ? "text-gray-300 border-gray-700"
                  : "text-gray-500 border-gray-200"
              }`}
            >
              <span>0 Retweets</span>
              <span>0 Quotes</span>
              <span>0 Likes</span>
              <span>0 Bookmarks</span>
            </div>

            <div
              className={`flex justify-between ${
                theme !== "light" ? "text-gray-300" : "text-gray-500"
              }`}
            >
              <Button variant="ghost" size="icon">
                <MessageCircle className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Repeat2 className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <BookmarkIcon className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Share className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </Card>

        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span
              className={`text-sm ${theme !== "light" ? "text-white" : ""}`}
            >
              Theme:
            </span>
            <Tabs value={theme} onValueChange={setTheme} className="max-w-[300px]">
              <TabsList>
                <TabsTrigger value="light" className="flex-1">
                  Light
                </TabsTrigger>
                <TabsTrigger value="dark" className="flex-1">
                  Dark
                </TabsTrigger>
                <TabsTrigger value="dim" className="flex-1">
                  Dim
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <Button
            onClick={handleDownload}
            disabled={mode === "edit"}
          >
            Download
          </Button>
        </div>
      </div>
    </div>
  );
}
