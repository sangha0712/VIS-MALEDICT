import React from 'react';
import { ShieldAlert, Radio, Target, Activity } from 'lucide-react';

interface SectionCommandCenterProps {
  onGoHome: () => void;
}

const SectionCommandCenter: React.FC<SectionCommandCenterProps> = ({ onGoHome }) => {
  return (
    <div className="max-w-7xl mx-auto py-6 px-4 animate-in fade-in duration-500 bg-slate-900 min-h-screen text-slate-200">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-700 pb-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <ShieldAlert className="w-8 h-8 text-red-500 animate-pulse" />
            작전 지휘 통제실 (OCC)
          </h2>
          <p className="text-slate-400 mt-2 text-sm">실시간 교내 보안 상태 및 작전 현황 모니터링 시스템</p>
        </div>
        <div className="flex text-sm text-slate-500 mt-4 md:mt-0">
          <button onClick={onGoHome} className="hover:text-white transition-colors">EXIT SYSTEM</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Status Panel */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-slate-800 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h3 className="text-slate-400 text-xs font-bold uppercase mb-2">DEFCON LEVEL</h3>
            <div className="text-4xl font-black text-green-500">LEVEL 5</div>
            <p className="text-sm text-slate-300 mt-1">평시 상태 (Normal Readiness)</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <h3 className="text-slate-400 text-xs font-bold uppercase mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4" /> System Status
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between items-center">
                <span>메인 결계 (Main Barrier)</span>
                <span className="text-green-400 font-mono">100% OPERATIONAL</span>
              </li>
              <li className="flex justify-between items-center">
                <span>감시 카메라 (CCTV)</span>
                <span className="text-green-400 font-mono">ONLINE</span>
              </li>
              <li className="flex justify-between items-center">
                <span>이능력 감지 센서</span>
                <span className="text-yellow-400 font-mono">CALIBRATING...</span>
              </li>
              <li className="flex justify-between items-center">
                <span>자동 방어 포탑</span>
                <span className="text-green-400 font-mono">STANDBY</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <h3 className="text-slate-400 text-xs font-bold uppercase mb-4 flex items-center gap-2">
              <Radio className="w-4 h-4" /> Active Channels
            </h3>
            <div className="space-y-2">
              <div className="bg-slate-700/50 p-2 rounded flex items-center gap-2 text-xs">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-mono text-green-400">[CH-1]</span>
                <span>통합 관제실</span>
              </div>
              <div className="bg-slate-700/50 p-2 rounded flex items-center gap-2 text-xs">
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <span className="font-mono text-gray-400">[CH-2]</span>
                <span>제1기동타격대 (오프라인)</span>
              </div>
              <div className="bg-slate-700/50 p-2 rounded flex items-center gap-2 text-xs">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="font-mono text-red-400">[CH-3]</span>
                <span>응급 의료팀 (출동 중)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Map Area */}
        <div className="md:col-span-2 bg-slate-800 rounded-lg border border-slate-700 p-4 relative min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]"></div>
          
          {/* Mock Map Visuals */}
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-64 h-64 border-2 border-slate-600 rounded-full flex items-center justify-center relative animate-[spin_10s_linear_infinite]">
              <div className="w-48 h-48 border border-slate-600 rounded-full"></div>
            </div>
            <div className="absolute w-2 h-2 bg-red-500 rounded-full top-1/3 left-1/3 shadow-[0_0_10px_red] animate-ping"></div>
            <div className="absolute top-1/3 left-1/3 ml-4 mt-[-10px] bg-slate-900/80 px-2 py-1 rounded border border-red-500 text-[10px] text-red-400">
              WARNING: Unauthorized Mana Spike
            </div>
            
            <div className="absolute bottom-4 right-4 text-right">
              <div className="text-4xl font-mono font-bold text-slate-600">SECTOR A-1</div>
              <div className="text-xs text-slate-500">GRID REFERENCE: 482-991</div>
            </div>
          </div>

          <div className="absolute top-4 left-4 bg-slate-900/90 p-3 rounded border border-slate-600">
            <h4 className="text-xs font-bold text-slate-400 mb-2 flex items-center gap-2">
              <Target className="w-3 h-3" /> RECENT ALERTS
            </h4>
            <ul className="space-y-1 text-[10px] font-mono">
              <li className="text-red-400">14:02 - Sector B: Fire Alarm</li>
              <li className="text-yellow-400">13:45 - Gate 3: Access Denied</li>
              <li className="text-green-400">12:00 - System Check Complete</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCommandCenter;
