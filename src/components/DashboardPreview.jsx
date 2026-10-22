import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield, Monitor, Play, RefreshCw, CheckCircle2, AlertTriangle,
  Radio, Terminal, Cpu, Lock, Globe, Server, Laptop, Smartphone,
  Zap, ArrowRight, Check, X, ShieldAlert, Sparkles, Filter
} from 'lucide-react';

/* ────── Rotating Cyber Radar Widget ────── */
function CyberRadar() {
  return (
    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-line bg-card flex items-center justify-center overflow-hidden shadow-card flex-shrink-0">
      {/* Concentric rings */}
      <div className="absolute inset-2 rounded-full border border-line/60" />
      <div className="absolute inset-6 rounded-full border border-line/60" />
      <div className="absolute inset-10 rounded-full border border-line/40" />
      {/* Crosshairs */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-px bg-line/80" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-full w-px bg-line/80" />
      </div>

      {/* Rotating radar sweep */}
      <div className="absolute inset-0 radar-sweep">
        <div
          className="w-1/2 h-1/2 origin-bottom-right"
          style={{
            background: 'conic-gradient(from 0deg at 100% 100%, rgba(2,132,199,0.35) 0deg, rgba(2,132,199,0.1) 45deg, transparent 90deg)',
          }}
        />
      </div>

      {/* Blip 1 */}
      <motion.div
        className="absolute top-6 right-8 w-2 h-2 rounded-full bg-severity-low shadow-[0_0_8px_rgba(34,197,94,0.6)]"
        animate={{ scale: [1, 1.6, 1], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      {/* Blip 2 */}
      <motion.div
        className="absolute bottom-7 left-7 w-2 h-2 rounded-full bg-ice shadow-[0_0_8px_rgba(2,132,199,0.6)]"
        animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.9, 0.3] }}
        transition={{ duration: 2.4, repeat: Infinity, delay: 0.8 }}
      />

      <div className="relative z-10 text-[9px] font-mono text-ice-strong bg-ice-soft px-1.5 py-0.5 rounded border border-ice/20 font-bold">
        SCAN: 360°
      </div>
    </div>
  );
}

/* ────── Interactive Attack Surface Mesh (VAPT) ────── */
function AttackSurfaceMesh({ isScanning, selectedNode, onSelectNode, remediatedNodes, onRemediate }) {
  const nodes = [
    { id: 'cloud', label: 'AWS Cloud VPC', icon: Server, x: 18, y: 32, cveCount: 0, status: 'secure', port: 'HTTPS 443' },
    { id: 'api', label: 'Public REST API', icon: Globe, x: 50, y: 18, cveCount: remediatedNodes.includes('api') ? 0 : 2, status: remediatedNodes.includes('api') ? 'secure' : 'warning', port: 'gRPC 50051' },
    { id: 'auth', label: 'OAuth Identity', icon: Lock, x: 82, y: 32, cveCount: 0, status: 'secure', port: 'OIDC 8443' },
    { id: 'db', label: 'PostgreSQL Core', icon: Cpu, x: 32, y: 72, cveCount: 0, status: 'secure', port: 'TLS 5432' },
    { id: 'k8s', label: 'EKS Auth Cluster', icon: Shield, x: 68, y: 72, cveCount: remediatedNodes.includes('k8s') ? 0 : 1, status: remediatedNodes.includes('k8s') ? 'secure' : 'critical', port: 'Kubelet 10250' },
  ];

  return (
    <div className="relative w-full h-[260px] sm:h-[300px] rounded-xl bg-bg/50 border border-line overflow-hidden p-3 flex flex-col justify-between">
      {/* Laser Scanning Line Overlay */}
      {isScanning && (
        <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-ice to-transparent laser-scan-line z-30 shadow-[0_0_15px_rgba(2,132,199,0.6)] pointer-events-none" />
      )}

      {/* Background Matrix Grid */}
      <div className="absolute inset-0 cyber-grid-perspective opacity-40 pointer-events-none" />

      {/* SVG Connecting Conduits with animated pulses */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="laserGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0369a1" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Lines between nodes */}
        <line x1="18%" y1="32%" x2="50%" y2="18%" stroke="rgba(2,132,199,0.25)" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="50%" y1="18%" x2="82%" y2="32%" stroke="rgba(2,132,199,0.25)" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="18%" y1="32%" x2="32%" y2="72%" stroke="rgba(2,132,199,0.25)" strokeWidth="1.5" />
        <line x1="82%" y1="32%" x2="68%" y2="72%" stroke="rgba(2,132,199,0.25)" strokeWidth="1.5" />
        <line x1="32%" y1="72%" x2="68%" y2="72%" stroke="url(#laserGrad)" strokeWidth="2" />
        <line x1="50%" y1="18%" x2="50%" y2="52%" stroke="rgba(2,132,199,0.2)" strokeWidth="1.5" />

        {/* Central Gateway Hub Ring */}
        <circle cx="50%" cy="52%" r="22" fill="none" stroke="rgba(2,132,199,0.35)" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="50%" cy="52%" r="8" fill="rgba(2,132,199,0.15)" />
      </svg>

      {/* Top Banner inside visualizer */}
      <div className="relative z-20 flex items-center justify-between text-[11px] font-mono">
        <span className="flex items-center gap-1.5 text-ice-strong bg-ice-soft px-2 py-0.5 rounded border border-ice/20 font-semibold">
          <Zap size={12} className="animate-pulse text-ice" />
          LIVE ATTACK SURFACE TOPOLOGY
        </span>
        <span className="text-muted text-[10px]">
          Click any node to inspect &amp; auto-patch
        </span>
      </div>

      {/* Nodes on the map */}
      <div className="relative w-full h-full">
        {nodes.map((node) => {
          const Icon = node.icon;
          const isSelected = selectedNode?.id === node.id;
          const isWarning = node.status === 'warning';
          const isCritical = node.status === 'critical';

          return (
            <motion.button
              key={node.id}
              onClick={() => onSelectNode(node)}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer z-20 focus:outline-none"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center border transition-all shadow-md ${
                  isSelected
                    ? 'bg-ice-soft border-ice shadow-[0_0_15px_rgba(2,132,199,0.4)]'
                    : isCritical
                    ? 'bg-severity-critical/15 border-severity-critical/70 shadow-[0_0_15px_rgba(239,68,68,0.3)] animate-pulse'
                    : isWarning
                    ? 'bg-severity-high/15 border-severity-high/70 shadow-[0_0_15px_rgba(249,115,22,0.3)]'
                    : 'bg-card border-line hover:border-ice hover:shadow-card'
                }`}
              >
                <Icon
                  size={18}
                  className={
                    isCritical ? 'text-severity-critical' : isWarning ? 'text-severity-high' : 'text-ice'
                  }
                />
              </div>

              {/* Node Label Badge */}
              <div className="mt-1 px-1.5 py-0.5 rounded bg-card/95 border border-line text-[10px] font-mono text-ink whitespace-nowrap group-hover:border-ice group-hover:text-ice transition-colors shadow-sm">
                {node.label}
                {node.cveCount > 0 && (
                  <span className="ml-1 text-severity-critical font-bold">[{node.cveCount} CVE]</span>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Bottom Bar: Node Quick Inspector or Status */}
      <div className="relative z-20">
        <AnimatePresence mode="wait">
          {selectedNode ? (
            <motion.div
              key={selectedNode.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="flex items-center justify-between p-2 rounded-lg bg-card/95 border border-line shadow-card backdrop-blur-md text-xs font-mono"
            >
              <div className="flex items-center gap-2">
                <span className="text-ink font-bold">{selectedNode.label}</span>
                <span className="text-muted">({selectedNode.port})</span>
                {remediatedNodes.includes(selectedNode.id) || selectedNode.cveCount === 0 ? (
                  <span className="text-severity-low flex items-center gap-1 font-semibold">
                    <CheckCircle2 size={13} /> Hardened &amp; Zero-Trust
                  </span>
                ) : (
                  <span className="text-severity-high flex items-center gap-1 font-semibold">
                    <AlertTriangle size={13} /> CVSS 7.8 Detected
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                {!remediatedNodes.includes(selectedNode.id) && selectedNode.cveCount > 0 ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemediate(selectedNode.id);
                    }}
                    className="px-2.5 py-1 rounded bg-ice text-white hover:bg-primary transition-colors text-[11px] font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <Check size={12} /> Auto-Remediate
                  </button>
                ) : (
                  <span className="text-[10px] text-muted">Policy: Compliant</span>
                )}
                <button
                  onClick={() => onSelectNode(null)}
                  className="p-1 text-muted hover:text-ink cursor-pointer"
                >
                  <X size={13} />
                </button>
              </div>
            </motion.div>
          ) : (
            <div className="flex items-center justify-between text-[10px] font-mono text-muted px-1">
              <span>● Target: 5 Nodes Scanned</span>
              <span className="text-severity-low">eBPF Real-Time Ingress: 0 Threat Vectors Active</span>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ────── Interactive Live Terminal Feed (ONE / VAPT) ────── */
function LiveTerminal({ logs, onRunCommand }) {
  const quickCmds = [
    { label: 'audit_encryption', cmd: 'osquery> SELECT count(*) FROM disk_encryption WHERE active=1;' },
    { label: 'isolate_threat', cmd: 'secops> isolate --host srv-east-auth --firewall=drop' },
    { label: 'zero_day_sync', cmd: 'ebpf-shield> push-rule --cve=2026-4418 --apply-all' },
  ];

  return (
    <div className="rounded-xl bg-footer border border-footer p-3 font-mono text-xs overflow-hidden flex flex-col h-full shadow-card">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-gray-300 text-[11px]">
        <div className="flex items-center gap-1.5">
          <Terminal size={14} className="text-ice" />
          <span className="text-white font-medium">REAL-TIME TELEMETRY STREAM</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-severity-low animate-ping" />
          <span className="text-[10px] text-severity-low">STREAMING</span>
        </div>
      </div>

      {/* Log lines */}
      <div className="flex-1 space-y-1.5 overflow-y-auto max-h-36 pr-1 text-[11px]">
        {logs.map((log, i) => (
          <div key={i} className="flex items-start gap-2 leading-relaxed">
            <span className="text-gray-500 select-none text-[10px]">{log.time}</span>
            <span
              className={`px-1 py-0.2 rounded text-[9px] font-bold uppercase ${
                log.type === 'BLOCKED'
                  ? 'bg-severity-critical/20 text-red-300 border border-severity-critical/30'
                  : log.type === 'PATCHED'
                  ? 'bg-severity-low/20 text-emerald-300 border border-severity-low/30'
                  : 'bg-ice/20 text-sky-300 border border-ice/30'
              }`}
            >
              {log.type}
            </span>
            <span className="text-gray-200">{log.msg}</span>
          </div>
        ))}
      </div>

      {/* Interactive Quick Execution Bar */}
      <div className="pt-2 mt-2 border-t border-white/10 flex flex-wrap items-center gap-1.5">
        <span className="text-[10px] text-gray-400 flex items-center gap-1">
          <Play size={10} className="text-ice" /> Quick Run:
        </span>
        {quickCmds.map((c) => (
          <button
            key={c.label}
            onClick={() => onRunCommand(c.cmd)}
            className="px-2 py-0.5 rounded bg-slate-800/90 border border-slate-700 hover:border-ice hover:bg-slate-700 text-sky-300 text-[10px] transition-colors cursor-pointer"
          >
            {c.label}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ────── ONE Fleet Grid (Mode: Anjavor One) ────── */
function FleetMatrix() {
  const fleets = [
    { name: 'Windows Fleet', count: 3420, healthy: '99.8%', icon: Laptop, color: 'cyan', tags: 'BitLocker On' },
    { name: 'macOS Workstations', count: 2180, healthy: '100%', icon: Laptop, color: 'emerald', tags: 'FileVault 2' },
    { name: 'Linux Cloud Servers', count: 1050, healthy: '100%', icon: Server, color: 'cyan', tags: 'eBPF Enforced' },
    { name: 'Mobile Endpoints', count: 1490, healthy: '99.4%', icon: Smartphone, color: 'emerald', tags: 'MDM Compliant' },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {fleets.map((f) => {
        const Icon = f.icon;
        return (
          <div
            key={f.name}
            className="p-3 rounded-xl bg-card border border-line hover:border-ice/40 hover:shadow-card transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center border bg-ice-soft border-ice/20 text-ice">
                <Icon size={14} />
              </div>
              <span className="text-[10px] font-mono text-severity-low bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20 font-semibold">
                {f.healthy}
              </span>
            </div>

            <div>
              <div className="text-xl font-heading font-black text-ink">{f.count.toLocaleString()}</div>
              <div className="text-xs text-muted font-medium">{f.name}</div>
              <div className="text-[10px] font-mono text-ice mt-1 flex items-center gap-1 font-semibold">
                <CheckCircle2 size={10} /> {f.tags}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ────── Main Unified Command Center ────── */
export default function DashboardPreview({ initialMode = 'vapt' }) {
  const [activeTab, setActiveTab] = useState(initialMode);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(100);
  const [selectedNode, setSelectedNode] = useState(null);
  const [remediatedNodes, setRemediatedNodes] = useState([]);
  const [logs, setLogs] = useState([
    { time: '17:10:04', type: 'BLOCKED', msg: 'SQLi probe neutralized on /api/v1/auth' },
    { time: '17:10:02', type: 'PATCHED', msg: 'eBPF kernel patch deployed across 4,820 containers' },
    { time: '17:09:58', type: 'AUDITED', msg: 'TLS 1.3 zero-downgrade policy enforced globally' },
    { time: '17:09:52', type: 'COMPLIANT', msg: 'SOC-2 continuous evidence collection active' },
  ]);

  const isVapt = activeTab === 'vapt';

  // Handle Threat Simulation
  const handleTriggerScan = () => {
    if (isScanning) return;
    setIsScanning(true);
    setScanProgress(0);

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          setLogs((l) => [
            { time: new Date().toTimeString().slice(0, 8), type: 'PATCHED', msg: 'Full attack surface deep scan finished: 0 active threats' },
            ...l.slice(0, 5),
          ]);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleRemediateNode = (nodeId) => {
    setRemediatedNodes((prev) => [...prev, nodeId]);
    setLogs((l) => [
      { time: new Date().toTimeString().slice(0, 8), type: 'PATCHED', msg: `Node [${nodeId.toUpperCase()}] vulnerability remediated via autonomous patch` },
      ...l.slice(0, 5),
    ]);
  };

  const handleRunCommand = (cmd) => {
    setLogs((l) => [
      { time: new Date().toTimeString().slice(0, 8), type: 'AUDITED', msg: `Executed: ${cmd}` },
      ...l.slice(0, 5),
    ]);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Outer Glow Halo */}
      <div
        className="absolute -inset-1 rounded-3xl opacity-40 blur-2xl pointer-events-none transition-all duration-700"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(2,132,199,0.18) 0%, rgba(125,211,252,0.12) 50%, transparent 80%)',
        }}
      />

      {/* Floating Micro-Badge Left */}
      <motion.div
        className="hidden xl:flex absolute -left-8 top-16 z-30 p-3 rounded-2xl bg-card/95 border border-line backdrop-blur-xl shadow-card items-center gap-3 w-60"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-9 h-9 rounded-xl bg-ice-soft border border-ice/20 text-ice flex items-center justify-center flex-shrink-0">
          <ShieldAlert size={18} />
        </div>
        <div>
          <div className="text-[10px] font-mono font-bold text-ice-strong uppercase tracking-wider">Zero-Day Shield</div>
          <div className="text-xs font-semibold text-ink">CVE-2026-4418 Blocked</div>
          <div className="text-[10px] text-muted">Turnaround: 14ms via eBPF</div>
        </div>
      </motion.div>

      {/* Floating Micro-Badge Right */}
      <motion.div
        className="hidden xl:flex absolute -right-8 bottom-20 z-30 p-3 rounded-2xl bg-card/95 border border-line backdrop-blur-xl shadow-card items-center gap-3 w-64"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <div className="w-9 h-9 rounded-xl bg-ice-soft border border-ice/20 text-ice-strong flex items-center justify-center flex-shrink-0">
          <Sparkles size={18} />
        </div>
        <div>
          <div className="text-[10px] font-mono font-bold text-ice-strong uppercase tracking-wider">Autonomous Posture</div>
          <div className="text-xs font-semibold text-ink">8,140 Endpoints Synced</div>
          <div className="text-[10px] text-muted">SOC-2 &amp; ISO-27001 Audit Ready</div>
        </div>
      </motion.div>

      {/* Main Command Console Chassis */}
      <div className="relative rounded-2xl border-beam-container bg-card border border-line shadow-card backdrop-blur-2xl overflow-hidden">
        {/* Chassis Hardware Top Bar */}
        <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3.5 border-b border-line bg-card/80 gap-3">
          {/* Left: Window Dots & Enclave Title */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-3 h-3 rounded-full bg-red-500/80 border border-red-600/50" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-600/50" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/50" />
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-ink tracking-wider">
                ANJAVOR CYBERSHIELD
              </span>
              <span className="text-[10px] font-mono text-ice-strong bg-ice-soft px-2 py-0.5 rounded border border-ice/20 font-semibold">
                v5.0 MATRIX
              </span>
            </div>
          </div>

          {/* Center: Interactive Platform Tab Switcher */}
          <div className="flex items-center bg-bg/70 p-1 rounded-xl border border-line shadow-inner">
            <button
              onClick={() => setActiveTab('vapt')}
              className={`relative px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
                isVapt ? 'text-white' : 'text-muted hover:text-ink'
              }`}
            >
              <Shield size={13} className={isVapt ? 'text-white' : ''} />
              <span>Anjavor VAPT</span>
              {isVapt && (
                <motion.div
                  layoutId="active-console-tab"
                  className="absolute inset-0 rounded-lg bg-primary -z-10 shadow-sm"
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                />
              )}
            </button>

            <button
              onClick={() => setActiveTab('one')}
              className={`relative px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
                !isVapt ? 'text-white' : 'text-muted hover:text-ink'
              }`}
            >
              <Monitor size={13} className={!isVapt ? 'text-white' : ''} />
              <span>Anjavor One</span>
              {!isVapt && (
                <motion.div
                  layoutId="active-console-tab"
                  className="absolute inset-0 rounded-lg bg-primary -z-10 shadow-sm"
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                />
              )}
            </button>
          </div>

          {/* Right: Trigger Scan Button & Live Beacon */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={handleTriggerScan}
              disabled={isScanning}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                isScanning
                  ? 'bg-ice-soft text-ice-strong border border-ice/30 animate-pulse'
                  : 'btn-primary text-xs py-1.5 px-3'
              }`}
            >
              <Play size={12} className={isScanning ? 'animate-spin' : ''} />
              <span>{isScanning ? `SCANNING ${scanProgress}%` : 'SIMULATE ATTACK'}</span>
            </button>
          </div>
        </div>

        {/* Console Body Canvas */}
        <div className="p-4 sm:p-6 lg:p-7 space-y-6">
          <AnimatePresence mode="wait">
            {isVapt ? (
              <motion.div
                key="vapt-view"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* Visualizer Row: Mesh Visualizer (Left) + Radar & Metrics (Right) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                  {/* Left 8 cols: Interactive Topology Mesh */}
                  <div className="lg:col-span-8 flex flex-col justify-between">
                    <AttackSurfaceMesh
                      isScanning={isScanning}
                      selectedNode={selectedNode}
                      onSelectNode={setSelectedNode}
                      remediatedNodes={remediatedNodes}
                      onRemediate={handleRemediateNode}
                    />
                  </div>

                  {/* Right 4 cols: Cyber Radar + Fast Posture Gauge */}
                  <div className="lg:col-span-4 flex flex-col gap-3 justify-between">
                    <div className="p-4 rounded-xl bg-card border border-line shadow-sm flex items-center justify-between gap-4">
                      <div>
                        <div className="text-[10px] font-mono text-ice-strong font-bold uppercase tracking-wider mb-1">
                          DEFENSE RADAR
                        </div>
                        <div className="text-sm font-bold text-ink leading-tight">
                          Active Perimeter
                        </div>
                        <div className="text-[11px] text-muted mt-1">
                          Zero Unknown Ingress
                        </div>
                      </div>
                      <CyberRadar />
                    </div>

                    <div className="p-4 rounded-xl bg-card border border-line shadow-sm flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-mono text-ice-strong font-bold uppercase tracking-wider mb-1">
                          VAPT POSTURE
                        </div>
                        <div className="text-2xl font-heading font-black text-ink">99.2%</div>
                        <div className="text-[11px] text-muted">Hardened Compliance</div>
                      </div>
                      <div className="w-14 h-14 rounded-full border-4 border-ice/20 border-t-ice flex items-center justify-center font-mono text-xs font-bold text-ice shadow-sm">
                        A+
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Real-Time Telemetry Terminal */}
                <LiveTerminal logs={logs} onRunCommand={handleRunCommand} />
              </motion.div>
            ) : (
              <motion.div
                key="one-view"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* Fleet Breakdown Grid */}
                <FleetMatrix />

                {/* Bottom Row: Terminal with Osquery & Endpoint Isolation */}
                <LiveTerminal logs={logs} onRunCommand={handleRunCommand} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer Security Certifications Bar */}
          <div className="pt-3 border-t border-line flex flex-wrap items-center justify-between gap-3 text-muted text-[11px] font-mono">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-severity-low font-semibold">
                <CheckCircle2 size={13} /> Continuous Penetration Testing
              </span>
              <span className="text-line">|</span>
              <span className="text-ice-strong font-semibold">Zero-Trust Fleet Control</span>
            </div>
            <div className="text-muted">
              ISO 27001 • SOC-2 Type II • NIST 800-53 Certified
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ────── Export Named Helpers for Backwards Compatibility ────── */
export function VAPTDashboard() {
  return <DashboardPreview initialMode="vapt" />;
}

export function OneDashboard() {
  return <DashboardPreview initialMode="one" />;
}
