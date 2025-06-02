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
  difficulty: string
  color: string
  scenario: string
  mission: string
  actionBreakdown: string[]
  technicalDetails: string
  realWorldImpact: string
  quiz: QuizQuestion[]
}

export const attacks: Attack[] = [
  {
    slug: "can",
    title: "CAN Bus Spoofing",
    tagline: "The car obeys fake commands — and it doesn't even know it.",
    summary:
      "Hackers inject false messages into the vehicle's nervous system, altering behavior like lights, brakes, or engine control.",
    difficulty: "Intermediate",
    color: "red",
    scenario:
      "You are a cybersecurity researcher investigating a connected vehicle that has been exhibiting strange behavior. The car's lights are flickering randomly, the engine RPM is fluctuating without driver input, and the brake system is showing intermittent warning messages. Your task is to identify and analyze a CAN Bus spoofing attack that is injecting malicious messages into the vehicle's Controller Area Network.",
    mission:
      "Your mission is to understand how attackers can exploit the CAN Bus protocol to send unauthorized commands to vehicle systems. You will learn to identify spoofed CAN messages, analyze their impact on vehicle behavior, and implement effective countermeasures to prevent such attacks. This simulation will teach you the fundamentals of automotive network security and the critical importance of message authentication in connected vehicles.",
    actionBreakdown: [
      "Connect to the vehicle's OBD-II port and establish communication with the CAN Bus network",
      "Monitor normal CAN traffic patterns and identify baseline message frequencies and data structures",
      "Detect anomalous CAN messages that don't match expected patterns or timing",
      "Analyze the content of suspicious messages to understand their intended effect on vehicle systems",
      "Trace the source of malicious messages and determine the attack vector used",
      "Implement message filtering and authentication mechanisms to block spoofed messages",
      "Test the effectiveness of your countermeasures by attempting to reproduce the attack",
      "Document your findings and create a comprehensive security assessment report",
    ],
    technicalDetails:
      "The CAN Bus (Controller Area Network) is a robust vehicle bus standard designed to allow microcontrollers and devices to communicate with each other without a host computer. However, the original CAN protocol lacks built-in security features such as authentication and encryption. This simulation demonstrates how attackers can exploit these vulnerabilities by injecting crafted messages with specific CAN IDs that correspond to critical vehicle functions. You'll work with real CAN message formats, understand arbitration mechanisms, and learn about the difference between standard and extended frame formats.",
    realWorldImpact:
      "CAN Bus spoofing attacks have been demonstrated in real-world scenarios, including the famous Jeep Cherokee hack that allowed researchers to remotely control steering, braking, and acceleration. Such attacks can lead to catastrophic safety incidents, vehicle theft, or privacy breaches. Understanding these vulnerabilities is crucial for automotive engineers, cybersecurity professionals, and anyone involved in the development of connected and autonomous vehicles. The techniques learned in this simulation are directly applicable to securing modern automotive systems and preventing real-world attacks.",
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
    summary:
      "Attackers create false LiDAR signals, tricking the car into reacting to fake obstacles or ignoring real ones.",
    difficulty: "Advanced",
    color: "purple",
    scenario:
      "You are working as a security consultant for an autonomous vehicle manufacturer. During testing, several self-driving cars have been making unexpected emergency stops and swerving maneuvers in areas where no obstacles are present. Additionally, some vehicles have failed to detect actual obstacles that should have triggered automatic braking. Your investigation reveals that the LiDAR sensors are receiving manipulated signals that create false point cloud data.",
    mission:
      "Your mission is to understand how LiDAR spoofing attacks work and develop effective detection and mitigation strategies. You will learn about LiDAR technology, analyze how attackers can inject false signals, and explore the impact on autonomous vehicle decision-making systems. This simulation will teach you to identify spoofed LiDAR data, understand the physics behind the attacks, and implement robust sensor fusion techniques to maintain vehicle safety.",
    actionBreakdown: [
      "Study the fundamentals of LiDAR technology and how it generates 3D point cloud data",
      "Analyze normal LiDAR sensor output and understand typical environmental signatures",
      "Identify anomalous point cloud data that indicates potential spoofing attacks",
      "Examine the physical methods used to inject false LiDAR signals using laser devices",
      "Understand how spoofed data affects the vehicle's perception and decision-making algorithms",
      "Implement sensor fusion techniques that combine LiDAR with camera and radar data",
      "Develop algorithms to detect inconsistencies between different sensor modalities",
      "Test your detection system against various spoofing scenarios and refine the approach",
      "Create a comprehensive defense strategy that includes both technical and operational measures",
    ],
    technicalDetails:
      "LiDAR (Light Detection and Ranging) systems use laser pulses to measure distances and create detailed 3D maps of the environment. The technology relies on time-of-flight calculations and can be vulnerable to signal injection attacks where attackers use their own laser sources to create false returns. This simulation covers the technical aspects of LiDAR operation, including wavelength considerations, pulse timing, and point cloud processing. You'll learn about different types of LiDAR systems (mechanical, solid-state, flash) and their specific vulnerabilities to spoofing attacks.",
    realWorldImpact:
      "LiDAR spoofing represents a significant threat to autonomous vehicles, as these sensors are critical for obstacle detection and navigation. Successful attacks could cause vehicles to brake unnecessarily, creating traffic hazards, or worse, fail to detect real obstacles, leading to collisions. As autonomous vehicles become more prevalent, understanding and mitigating LiDAR vulnerabilities becomes crucial for public safety. The techniques learned in this simulation are essential for engineers working on autonomous vehicle systems and cybersecurity professionals focused on transportation security.",
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
    summary: "Fake GPS signals mislead the vehicle's navigation system, causing disorientation and potential hazards.",
    difficulty: "Beginner",
    color: "blue",
    scenario:
      "You are a cybersecurity analyst investigating reports of connected vehicles experiencing navigation anomalies in a specific geographic area. Drivers report that their GPS systems are showing incorrect locations, routing them to wrong destinations, and in some cases, directing them into dangerous areas or dead ends. Your preliminary investigation suggests that someone is broadcasting fake GPS signals to manipulate vehicle navigation systems.",
    mission:
      "Your mission is to understand GPS spoofing attacks and their impact on vehicle navigation and safety systems. You will learn how GPS signals work, how attackers can generate fake signals, and the cascading effects on vehicle behavior. This simulation will teach you to detect GPS spoofing attempts, understand the technical requirements for such attacks, and implement countermeasures to ensure reliable navigation even in contested environments.",
    actionBreakdown: [
      "Learn the fundamentals of GPS signal structure and how receivers calculate position",
      "Monitor GPS signal strength and quality indicators to establish baseline measurements",
      "Identify signs of GPS spoofing including signal anomalies and impossible position jumps",
      "Analyze the technical setup required to generate convincing fake GPS signals",
      "Understand how spoofed GPS data affects vehicle routing and autonomous driving systems",
      "Implement GPS signal validation techniques using multiple positioning sources",
      "Test alternative positioning methods including inertial navigation and cellular triangulation",
      "Develop a multi-layered approach to position verification and spoofing detection",
      "Create protocols for safe vehicle operation when GPS reliability is compromised",
    ],
    technicalDetails:
      "GPS spoofing involves broadcasting fake satellite signals that appear legitimate to GPS receivers. Attackers use software-defined radios (SDRs) to generate signals that mimic real GPS satellites, gradually overpowering authentic signals to take control of the receiver's position calculation. This simulation covers GPS signal structure, including the navigation message format, timing requirements, and the mathematical principles behind position calculation. You'll learn about different spoofing techniques, from simple signal overpowering to sophisticated seamless takeover attacks.",
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
    summary: "Wireless exploits let hackers take control of driving systems like acceleration and steering.",
    difficulty: "Expert",
    color: "red",
    scenario:
      "You are part of an incident response team investigating a series of connected vehicle security breaches. Multiple vehicles from the same manufacturer have experienced unauthorized remote control, with attackers taking control of critical driving functions including steering, acceleration, and braking. The attacks appear to be coordinated and sophisticated, suggesting a well-resourced threat actor. Your team must quickly understand the attack vector and develop countermeasures before more vehicles are compromised.",
    mission:
      "Your mission is to investigate and understand remote vehicle hijacking attacks that exploit wireless communication systems. You will learn about the various wireless interfaces in modern vehicles, identify potential attack vectors, and understand how attackers can gain remote control of critical vehicle systems. This simulation will teach you advanced penetration testing techniques specific to automotive systems and help you develop comprehensive security strategies for connected vehicles.",
    actionBreakdown: [
      "Map the vehicle's wireless attack surface including cellular, Wi-Fi, and Bluetooth interfaces",
      "Analyze the vehicle's network architecture and identify critical communication pathways",
      "Investigate potential entry points through infotainment systems and telematics units",
      "Understand how attackers can pivot from entertainment systems to safety-critical networks",
      "Examine the exploitation of over-the-air update mechanisms and remote diagnostic tools",
      "Learn about privilege escalation techniques within automotive operating systems",
      "Analyze how attackers can maintain persistence and avoid detection in vehicle systems",
      "Implement network segmentation and access control measures to prevent lateral movement",
      "Develop monitoring and detection systems to identify unauthorized remote access attempts",
      "Create incident response procedures for handling compromised connected vehicles",
    ],
    technicalDetails:
      "Remote vehicle hijacking typically involves exploiting vulnerabilities in the vehicle's wireless communication systems. Modern vehicles contain multiple wireless interfaces including cellular modems for telematics, Wi-Fi for infotainment, and Bluetooth for device connectivity. This simulation covers advanced topics including automotive operating systems, hypervisor security, and the interaction between different vehicle networks (infotainment, body, and powertrain). You'll learn about real attack techniques used in documented vehicle hacks and understand the technical challenges of securing complex automotive systems.",
    realWorldImpact:
      "Remote vehicle hijacking represents one of the most serious cybersecurity threats to connected and autonomous vehicles. Successful attacks can result in complete loss of vehicle control, potentially leading to accidents, injuries, or fatalities. High-profile demonstrations like the Jeep Cherokee hack have shown that these attacks are not theoretical but represent real and present dangers. Understanding these attack vectors is crucial for automotive manufacturers, cybersecurity professionals, and regulators working to ensure the safety and security of connected transportation systems.",
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
    summary: "Compromised infotainment systems are used to distract or spy on drivers through unauthorized content.",
    difficulty: "Intermediate",
    color: "orange",
    scenario:
      "You are a digital forensics investigator working on a case involving compromised vehicle infotainment systems. Vehicle owners have reported strange behavior including unauthorized audio playback, unexpected video content appearing on displays, and suspicions that their conversations are being recorded. Some drivers have also reported receiving threatening messages through their vehicle's display system. Your investigation needs to determine how attackers gained access to these systems and what data may have been compromised.",
    mission:
      "Your mission is to investigate multimedia hijacking attacks that target vehicle infotainment systems for surveillance and psychological manipulation. You will learn about the security vulnerabilities in automotive multimedia systems, understand how attackers can gain unauthorized access to cameras and microphones, and explore the privacy implications of compromised vehicle systems. This simulation will teach you digital forensics techniques specific to automotive systems and help you understand the broader implications of infotainment security.",
    actionBreakdown: [
      "Analyze the architecture of modern vehicle infotainment systems and their connectivity options",
      "Investigate how attackers can gain initial access through USB ports, Bluetooth, or wireless networks",
      "Examine the file system and identify signs of unauthorized software installation or modification",
      "Understand how attackers can access and control built-in cameras and microphones",
      "Analyze network traffic to identify unauthorized data transmission from the vehicle",
      "Investigate how multimedia hijacking can be used for driver distraction and psychological warfare",
      "Learn about the privacy implications of compromised vehicle surveillance systems",
      "Implement security measures to prevent unauthorized access to multimedia components",
      "Develop detection mechanisms for identifying compromised infotainment systems",
      "Create user awareness guidelines for recognizing and responding to multimedia attacks",
    ],
    technicalDetails:
      "Vehicle infotainment systems are essentially computers running modified versions of Android, Linux, or proprietary operating systems. These systems often have access to vehicle cameras, microphones, and display systems, making them attractive targets for attackers seeking surveillance capabilities. This simulation covers the technical aspects of infotainment system architecture, including the Android Automotive platform, QNX systems, and custom automotive operating systems. You'll learn about common vulnerabilities in these systems and understand how they can be exploited for unauthorized surveillance and content manipulation.",
    realWorldImpact:
      "Multimedia hijacking attacks represent a significant privacy and safety threat to vehicle occupants. Beyond the obvious privacy violations of unauthorized surveillance, these attacks can be used to distract drivers, display disturbing content, or even facilitate stalking and harassment. As vehicles become more connected and feature-rich, the attack surface for multimedia hijacking continues to expand. Understanding these threats is essential for automotive manufacturers, privacy advocates, and cybersecurity professionals working to protect vehicle occupants from digital threats.",
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
