/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sidebar } from './components/Sidebar';
import { Topbar } from './components/Topbar';
import { Footer } from './components/Footer';
import { FileExplorer } from './components/FileExplorer';
import { VideoPlayer } from './components/VideoPlayer';
import { Transcript } from './components/Transcript';
import { AIChat } from './components/AIChat';

export default function App() {
  return (
    <div className="flex h-screen w-full bg-surface text-on-surface font-body overflow-hidden selection:bg-primary/30">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0">
        <Topbar />
        <main className="flex-1 flex overflow-hidden">
          <FileExplorer />
          <VideoPlayer />
          <Transcript />
          <AIChat />
        </main>
        <Footer />
      </div>
    </div>
  );
}
