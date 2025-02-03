"use client"

import { useState } from "react";
import { templates, toneOptions, type Template } from "@/data/templates/templates";
import { TemplateButton } from "@/components/TemplateButton";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Copy, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast"
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";


 const page = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null
  );
  const [selectedTones, setSelectedTones] = useState<string[]>([]);
  const [prompt, setPrompt] = useState("");
  const [generatedPosts, setGeneratedPosts] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPrompts, setShowPrompts] = useState(false);
  const [searchPrompt, setSearchPrompt] = useState("");
  const [approximateWords, setApproximateWords] = useState([35]);
  const [includeHashtags, setIncludeHashtags] = useState(true);
  const [includeEmoji, setIncludeEmoji] = useState(true);
  const [postsToGenerate, setPostsToGenerate] = useState(3);
  const { toast } = useToast();

  const handleToneToggle = (tone: string) => {
    setSelectedTones((prev) =>
      prev.includes(tone) ? prev.filter((t) => t !== tone) : [...prev, tone]
    );
  };

  const handleTemplateSelect = (template: Template) => {
    setSelectedTemplate(template);
    if (template.prompts && template.prompts.length > 0) {
      setShowPrompts(true);
    }
  };

  const handlePromptSelect = (selectedPrompt: string) => {
    setPrompt(selectedPrompt);
    setShowPrompts(false);
  };

  const getWordCount = (text: string) => {
    return text.trim().split(/\s+/).length;
  };

  const generateHashtags = (text: string) => {
    if (!includeHashtags) return "";
    const words = text.toLowerCase().split(/\s+/);
    const hashtags = words
      .filter((word) => word.length > 3)
      .map((word) => `#${word.replace(/[^a-zA-Z0-9]/g, "")}`);
    return [...new Set(hashtags)].slice(0, 3).join(" ");
  };

  const addEmojis = (text: string) => {
    if (!includeEmoji) return text;
    const emojis = ["🌟", "✨", "💫", "🎯", "💪", "🔥"];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    return `${randomEmoji} ${text}`;
  };

  const handleGenerate = async () => {
    if (!selectedTemplate || !prompt) {
        toast({
            title: "Please select a template and enter a prompt",
            variant: "destructive",
        });
        return;
    }

    setIsGenerating(true);
    try {
        const requestBody = {
            prompt: prompt,
            tone: selectedTones.join(", "),
            wordCount: approximateWords[0],
            numberOfPosts: postsToGenerate,
            includeHashtags: includeHashtags,
            includeEmoji: includeEmoji,
        };

        console.log("Sending request:", requestBody);

        const response = await fetch("https://post-generator.ansariazaz1997.workers.dev/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
            mode: "cors",
        });

        console.log("Response status:", response.status);

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to generate posts: ${errorText}`);
        }

        const data = await response.json();
        console.log("Received response:", data);

        const posts = data.posts.map((post) => {
            let formattedPost = post;
            if (includeEmoji) {
                formattedPost = addEmojis(formattedPost);
            }
            if (includeHashtags) {
                formattedPost += ` ${generateHashtags(post)}`;
            }
            return formattedPost;
        });

        setGeneratedPosts(posts);
    } catch (error) {
        console.error("API Error:", error);
        toast({
            title: "Error generating posts",
            description: "Please try again later",
            variant: "destructive",
        });
    } finally {
        setIsGenerating(false);
    }
};


  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard!",
      description: "You can now paste your post anywhere",
    });
  };

  const filteredPrompts = selectedTemplate?.prompts?.filter((p) =>
    p.toLowerCase().includes(searchPrompt.toLowerCase())
  );

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        Social Media Post Generator
      </h1>
      <p className="text-2xl text-center mb-8">Stay consistent, creative, and productive with free AI social media post generator. </p>
      {/* Three-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Choose Template */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold mb-4">Choose Template</h2>
          <div className="grid grid-cols-2 gap-4 max-h-[720px] overflow-auto">
            {templates.map((template) => (
              <TemplateButton
                key={template.id}
                icon={template.icon}
                label={template.name}
                isSelected={selectedTemplate?.id === template.id}
                onClick={() => handleTemplateSelect(template)}
              />
            ))}
          </div>
        </div>

        {/* Column 2: Prompt and Settings */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Your Prompt</h2>
            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Write your prompt here..."
              className="min-h-[100px] mt-6"
            />
            <div className="mt-2 text-sm text-gray-500">
              Approximate word count: {getWordCount(prompt)}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Generation Settings
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">
                    Approximate words
                  </label>
                  <Slider
                    value={approximateWords}
                    onValueChange={setApproximateWords}
                    max={100}
                    step={1}
                    className="my-2"
                  />
                  <span className="text-sm text-gray-500">
                    {approximateWords} words
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">
                    Generate hashtags
                  </label>
                  <Switch
                    checked={includeHashtags}
                    onCheckedChange={setIncludeHashtags}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Include emoji</label>
                  <Switch
                    checked={includeEmoji}
                    onCheckedChange={setIncludeEmoji}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">
                    Posts to generate
                  </label>
                  <Input
                    type="number"
                    min={1}
                    max={10}
                    value={postsToGenerate}
                    onChange={(e) => setPostsToGenerate(Number(e.target.value))}
                    className="mt-1"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Tone of Voice</h2>
              <div className="flex flex-wrap gap-2">
                {toneOptions.map((tone) => (
                  <Badge
                    key={tone}
                    variant={
                      selectedTones.includes(tone) ? "default" : "outline"
                    }
                    className="cursor-pointer px-4 py-2"
                    onClick={() => handleToneToggle(tone)}
                  >
                    {tone}
                  </Badge>
                ))}
              </div>
            </div>

            <Button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full"
            >
              {isGenerating ? "Generating..." : "Generate Posts"}
            </Button>
          </div>
        </div>

        {/* Column 3: Generated Posts */}
        <div className="space-y-6">
          {generatedPosts.length > 0 ? (
            <div>
              <h2 className="text-xl font-semibold mb-4">Generated Posts</h2>
              <div className="space-y-4">
                {generatedPosts.map((post, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white rounded-lg border border-gray-200 relative group"
                  >
                    <p className="pr-8">{post}</p>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => copyToClipboard(post)}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-xl font-semibold mb-4">
                How to Generate Posts
              </h2>
              <div className="space-y-6">
                {/* Steps for generating posts */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full">
                      1
                    </span>
                  </div>
                  <div>
                    <h3 className="font-medium">Choose a Template</h3>
                    <p className="text-sm text-gray-600">
                      Select a template from the left column that matches the
                      type of post you want to create.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full">
                      2
                    </span>
                  </div>
                  <div>
                    <h3 className="font-medium">Write Your Prompt</h3>
                    <p className="text-sm text-gray-600">
                      Enter a prompt in the middle column. You can use the
                      suggested prompts by clicking on the template again.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full">
                      3
                    </span>
                  </div>
                  <div>
                    <h3 className="font-medium">Adjust Settings</h3>
                    <p className="text-sm text-gray-600">
                      Customize the post length, tone, hashtags, and emojis in
                      the middle column.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full">
                      4
                    </span>
                  </div>
                  <div>
                    <h3 className="font-medium">Generate Posts</h3>
                    <p className="text-sm text-gray-600">
                      Click the "Generate Posts" button to create your social
                      media posts. They will appear here!
                    </p>
                  </div>
                </div>

                {/* Video Tutorial Section */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Watch a Quick Tutorial
                  </h3>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/your-video-id"
                      title="How to Generate Social Media Posts"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Watch this video to see how to generate posts step-by-step.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Prompt Selection Dialog */}
      <Dialog open={showPrompts} onOpenChange={setShowPrompts}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Select a Prompt Template</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search prompts..."
                className="pl-10"
                value={searchPrompt}
                onChange={(e) => setSearchPrompt(e.target.value)}
              />
            </div>
            <div className="space-y-2 max-h-[400px] overflow-y-auto">
              {filteredPrompts?.map((promptTemplate, index) => (
                <div
                  key={index}
                  className="p-3 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
                  onClick={() => handlePromptSelect(promptTemplate)}
                >
                  {promptTemplate}
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};


export default page