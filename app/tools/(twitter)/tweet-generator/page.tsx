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
  RotateCcw,
} from "lucide-react";
import html2canvas from "html2canvas";
import Image from "next/image";
import avatar from "@/assets/avatar.png";
import verify from "@/assets/icons/varified.svg";

export default function TweetGenerator() {
  const [theme, setTheme] = useState("light");
  const [mode, setMode] = useState<"edit" | "preview">("edit");
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
    const file = e.target.files?.[0];
    if (file) handleImageUpload(file);
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

  return (
    <div
      className={`min-h-screen p-4 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : theme === "dim"
          ? "bg-gray-800 text-gray-100"
          : "bg-gray-50"
      }`}
    >
      <div className="max-w-xl mx-auto space-y-4">
        <div className="flex justify-between items-center mb-4">
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
            <Avatar className="w-12 h-12">
              <Image src={avatar} alt="Avatar" className="rounded-full" />
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-1 mb-0.5">
                <span
                  className={`font-bold ${theme === "dark" && "text-white"}`}
                >
                  Tweet Generator
                </span>
                <Image
                  src={verify}
                  alt="verified"
                  className="w-4 h-4 text-blue-500"
                />
                {mode === "edit" && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml-auto"
                    onClick={handleReset}
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span className="sr-only">Reset</span>
                  </Button>
                )}
              </div>
              <div
                className={`text-sm ${
                  theme !== "light" ? "text-gray-300" : "text-gray-500"
                }`}
              >
                @tweetgenerator
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
              <p className="whitespace-pre-wrap">{content.text}</p>
            )}

            <div
              className="border-2 border-dashed rounded-lg mt-4 text-center cursor-pointer relative flex flex-col items-center justify-center min-h-40"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              onClick={() => mode === "edit" && fileInputRef.current?.click()}
            >
              {content.image ? (
                <img
                  src={content.image || "/placeholder.svg"}
                  alt="Uploaded"
                  className="max-w-full h-auto"
                />
              ) : (
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

            <div
              className={`text-sm mt-4 ${
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

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span
              className={`text-sm ${theme !== "light" ? "text-white" : ""}`}
            >
              Theme:
            </span>
            <Tabs value={theme} onValueChange={setTheme} className="w-[300px]">
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
          <Button onClick={handleDownload} disabled={mode==="edit"}>Download</Button>
        </div>
      </div>
    </div>
  );
}
