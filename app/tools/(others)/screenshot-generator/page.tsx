"use client";

import { useCallback, useRef, useState } from "react";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Save, ChevronDown } from "lucide-react";
import { ImageUpload } from "@/components/ImageUpload";
import html2canvas from "html2canvas";

interface GeneratorState {
  size: number;
  roundness: number;
  shadow: number;
  rotate: number;
  border: number;
  frame: string;
  borderColor: string;
  background: string;
}

export default function ScreenshotGenerator() {
  const [settings, setSettings] = useState<GeneratorState>({
    size: 100,
    roundness: 17,
    shadow: 9,
    rotate: 0,
    border: 0,
    borderColor: "#000000",
    frame: "arc",
    background: "gradient",
  });
  const [canvas, setCanvas] = useState({
    background: "gradient",
    gradiant: null,
    color: null,
  });
  const [image, setImage] = useState<string | null>(null);
  const screenshotRef = useRef<HTMLDivElement>(null);
  const handleUpload = (file: File) => {
    const url = URL.createObjectURL(file);
    setImage(url);
  };
  const gradientOptions = [
    {
      label: "Blue to Purple",
      value: "blue-purple",
      colors: "bg-gradient-to-r from-blue-500 to-purple-700",
    },
    {
      label: "Pink to Orange",
      value: "pink-orange",
      colors: "bg-gradient-to-r from-pink-500 to-orange-600",
    },
    {
      label: "Green to Blue",
      value: "green-blue",
      colors: "bg-gradient-to-r from-green-500 to-blue-600",
    },
    {
      label: "Yellow to Red",
      value: "yellow-red",
      colors: "bg-gradient-to-r from-yellow-500 to-red-600",
    },
    {
      label: "Cyan to Teal",
      value: "cyan-teal",
      colors: "bg-gradient-to-r from-cyan-500 to-teal-600",
    },
    {
      label: "Purple to Pink",
      value: "purple-pink",
      colors: "bg-gradient-to-r from-purple-500 to-pink-600",
    },
    {
      label: "Orange to Yellow",
      value: "orange-yellow",
      colors: "bg-gradient-to-r from-orange-500 to-yellow-400",
    },
    {
      label: "Indigo to Blue",
      value: "indigo-blue",
      colors: "bg-gradient-to-r from-indigo-500 to-blue-600",
    },
  ];

  const solidColors = [
    { label: "Red", value: "red", colors: "bg-red-600" },
    { label: "Blue", value: "blue", colors: "bg-blue-600" },
    { label: "Green", value: "green", colors: "bg-green-600" },
    { label: "Yellow", value: "yellow", colors: "bg-yellow-500" },
    { label: "Purple", value: "purple", colors: "bg-purple-600" },
    { label: "Teal", value: "teal", colors: "bg-teal-600" },
    { label: "Orange", value: "orange", colors: "bg-orange-600" },
    { label: "Cyan", value: "cyan", colors: "bg-cyan-600" },
  ];
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = useCallback(async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 100));
  
      if (screenshotRef.current) {
        // Wait for fonts to load
        await document.fonts.ready;
  
        // Clone the element to capture a larger canvas
        const screenshotElement = screenshotRef.current;
        const originalWidth = screenshotElement.offsetWidth;
        const originalHeight = screenshotElement.offsetHeight;
        const scale = 2; // Adjust for higher resolution output
  
        const canvas = await html2canvas(screenshotElement, {
          width: originalWidth,
          height: originalHeight,
          scale: scale, // Capture at higher resolution
          removeContainer: true,
        });
  
        const image = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = image;
        link.download = `screenshot-${new Date().toISOString()}.png`;
        link.click();
      }
    } catch (error) {
      console.error("Screenshot failed:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);
  
  const handleRemove = ()=>{
     setImage(null)
     screenshotRef.current = null; 
  }
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Templates" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Templates</SelectItem>
                <SelectItem value="recent">Recent</SelectItem>
                <SelectItem value="saved">Saved</SelectItem>
              </SelectContent>
            </Select>
            {/* <div className="text-sm text-muted-foreground">1616 × 1400 px</div> */}
          </div>
          <div className="flex items-center gap-2">
            {image && (
              <>
                <Button variant="outline" size="sm" onClick={handleRemove}>
                  Remove Image
                </Button>
                <div className="flex items-center justify-end gap-2">
                  <Button variant="default" size="sm" onClick={handleDownload}>
                    <Save className="mr-2 h-4 w-4" />
                    {isLoading ? "Processing..." : "Download"}
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
          {/* Preview Area */}
          <Card
            ref={screenshotRef}
            style={{ width: 1000, height: 575 }}
            className={`aspect-video ${
              settings.background === "gradient"
                ? gradientOptions.find((g) => g.value === settings.gradient)
                    ?.colors
                : solidColors.find((c) => c.value === settings.color)?.colors
            }`}
          >
            <div className="flex h-full items-center justify-center">
              {image ? (
                <div
                  className={`${
                    canvas.background === "gradient"
                      ? gradientOptions.find((g) => g.value === canvas.gradient)
                          ?.colors
                      : solidColors.find((c) => c.value === canvas.color)
                          ?.colors
                  }`}
                  style={{
                    transform: `rotate(${settings.rotate}deg) scale(${
                      settings.size / 100
                    })`,
                    borderRadius: `${settings.roundness}px`,
                    border: `${settings.border}px solid ${settings.borderColor}`,
                    boxShadow: `0 ${settings.shadow}px ${
                      settings.shadow * 2
                    }px rgba(0,0,0,0.1)`,
                  }}
                >
                  <div className={`w-full max-w-[300px]`}>
                    <img
                      src={image || "/placeholder.svg"}
                      alt="Preview"
                      className="object-cover"
                    />
                  </div>
                </div>
              ) : (
                <div className="h-[400px] w-[600px]">
                  <ImageUpload onUpload={handleUpload} />
                </div>
              )}
            </div>
          </Card>

          {/* Controls */}
          {/* <div className="space-y-6"> */}

          <div className="rounded-lg bg-white p-4 shadow-sm">
            <h2 className="mb-4 font-medium">Screenshot options</h2>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Frame</label>
                <Select
                  value={settings.frame}
                  onValueChange={(value) =>
                    setSettings({ ...settings, frame: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select frame" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="arc">Arc</SelectItem>
                    <SelectItem value="simple">Simple</SelectItem>
                    <SelectItem value="none">None</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Size</label>
                <Slider
                  value={[settings.size]}
                  onValueChange={([value]) =>
                    setSettings({ ...settings, size: value })
                  }
                  min={50}
                  max={100}
                  step={1}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Roundness</label>
                <Slider
                  value={[settings.roundness]}
                  onValueChange={([value]) =>
                    setSettings({ ...settings, roundness: value })
                  }
                  min={0}
                  max={40}
                  step={1}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Shadow</label>
                <Slider
                  value={[settings.shadow]}
                  onValueChange={([value]) =>
                    setSettings({ ...settings, shadow: value })
                  }
                  min={0}
                  max={40}
                  step={1}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Rotate</label>
                <Slider
                  value={[settings.rotate]}
                  onValueChange={([value]) =>
                    setSettings({ ...settings, rotate: value })
                  }
                  min={-180}
                  max={180}
                  step={1}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Border</label>
                <Slider
                  value={[settings.border]}
                  onValueChange={([value]) =>
                    setSettings({ ...settings, border: value })
                  }
                  min={0}
                  max={50}
                  step={1}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Border Color:
                </label>
                <div className="flex items-center space-x-3">
                  <input
                    type="color"
                    className="h-10 w-10 cursor-pointer"
                    onChange={(e) =>
                      setSettings({ ...settings, borderColor: e.target.value })
                    }
                    value={settings.borderColor}
                  />
                  <span className="text-sm px-2 py-1 bg-gray-100 text-gray-700 rounded-lg border border-gray-300 shadow-sm">
                    {settings.borderColor}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Canvas Options */}
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <h2 className="mb-4 font-medium">Canvas Options</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Background</label>
                <Select
                  value={canvas.background}
                  onValueChange={(value) =>
                    setCanvas({ ...canvas, background: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select background" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gradient">Gradient</SelectItem>
                    <SelectItem value="solid">Solid</SelectItem>
                    <SelectItem value="transparent">Transparent</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {canvas.background === "gradient" && (
                <div className="space-y-2">
                  <label className="text-sm font-medium">Select Gradient</label>
                  <div className="flex gap-4">
                    {gradientOptions.map((option) => (
                      <div
                        key={option.value}
                        className={`w-8 h-8 rounded-lg cursor-pointer ${
                          option.colors
                        } border-2 ${
                          canvas.gradient === option.value
                            ? "border-black"
                            : "border-transparent"
                        }`}
                        onClick={() =>
                          setCanvas({ ...canvas, gradient: option.value })
                        }
                      />
                    ))}
                  </div>
                </div>
              )}

              {canvas.background === "solid" && (
                <div className="space-y-2">
                  <label className="text-sm font-medium">Select Color</label>
                  <div className="flex gap-4">
                    {solidColors.map((option) => (
                      <div
                        key={option.value}
                        className={`w-8 h-8 rounded-lg cursor-pointer ${
                          option.colors
                        } border-2 ${
                          canvas.color === option.value
                            ? "border-black"
                            : "border-transparent"
                        }`}
                        onClick={() =>
                          setCanvas({ ...canvas, color: option.value })
                        }
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <h2 className="mb-4 font-medium">Frame Options</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Background</label>
                <Select
                  value={settings.background}
                  onValueChange={(value) =>
                    setSettings({ ...settings, background: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select background" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gradient">Gradient</SelectItem>
                    <SelectItem value="solid">Solid</SelectItem>
                    <SelectItem value="transparent">Transparent</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {settings.background === "gradient" && (
                <div className="space-y-2">
                  <label className="text-sm font-medium">Select Gradient</label>
                  <div className="flex gap-4 flex-wrap">
                    {gradientOptions.map((option) => (
                      <div
                        key={option.value}
                        className={`w-8 h-8 rounded-lg cursor-pointer ${
                          option.colors
                        } border-2 ${
                          settings.gradient === option.value
                            ? "border-black"
                            : "border-transparent"
                        }`}
                        onClick={() =>
                          setSettings({ ...settings, gradient: option.value })
                        }
                      />
                    ))}
                  </div>
                </div>
              )}

              {settings.background === "solid" && (
                <div className="space-y-2">
                  <label className="text-sm font-medium">Select Color</label>
                  <div className="flex gap-4 flex-wrap">
                    {solidColors.map((option) => (
                      <div
                        key={option.value}
                        className={`w-8 h-8 rounded-lg cursor-pointer ${
                          option.colors
                        } border-2 ${
                          settings.color === option.value
                            ? "border-black"
                            : "border-transparent"
                        }`}
                        onClick={() =>
                          setSettings({ ...settings, color: option.value })
                        }
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* </div> */}
        </div>

        {/* Footer Actions */}
      </div>
    </div>
  );
}
