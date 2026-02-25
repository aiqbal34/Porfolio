// Highlighted metric helper
const M = ({ children }: { children: React.ReactNode }) => (
  <span className="text-amber-400 font-semibold">{children}</span>
);

export const SanDiskIntern = (
  <ul className="space-y-3">
    <li className="flex gap-2.5 items-baseline">
      <span className="text-amber-500/60 flex-shrink-0 text-xs mt-px">▸</span>
      <span>Revamped React-based UI architecture with live FastAPI backend integrations, optimizing state management and async workflows for real-time data sync with PostgreSQL</span>
    </li>
    <li className="flex gap-2.5 items-baseline">
      <span className="text-amber-500/60 flex-shrink-0 text-xs mt-px">▸</span>
      <span>Built staging tables in PostgreSQL, implemented <M>vector-based semantic search</M>, integrated a chatbot with persistent history, and shipped pagination, text ordering, and AI output formatting</span>
    </li>
    <li className="flex gap-2.5 items-baseline">
      <span className="text-amber-500/60 flex-shrink-0 text-xs mt-px">▸</span>
      <span>Built a file-upload API that generates embeddings for diverse data types and a database API library supporting AI orchestration and dynamic data retrieval</span>
    </li>
  </ul>
);

export const AI_ML_FirmwareEngineerIntern = (
  <ul className="space-y-3">
    <li className="flex gap-2.5 items-baseline">
      <span className="text-amber-500/60 flex-shrink-0 text-xs mt-px">▸</span>
      <span>Trained an AI model to generate firmware code, boosting engineering efficiency by <M>30%</M> and improving output accuracy end-to-end</span>
    </li>
    <li className="flex gap-2.5 items-baseline">
      <span className="text-amber-500/60 flex-shrink-0 text-xs mt-px">▸</span>
      <span>Refactored and optimized firmware code in C, improving maintainability and reducing CPU cycles by <M>20%</M></span>
    </li>
    <li className="flex gap-2.5 items-baseline">
      <span className="text-amber-500/60 flex-shrink-0 text-xs mt-px">▸</span>
      <span>Parsed error logs and conducted failure analysis using AI pattern recognition to diagnose and resolve production issues</span>
    </li>
    <li className="flex gap-2.5 items-baseline">
      <span className="text-amber-500/60 flex-shrink-0 text-xs mt-px">▸</span>
      <span>Designed and implemented test cases to validate firmware improvements, ensuring seamless integration into production builds</span>
    </li>
  </ul>
);

export const SoftwareResearchIntern = (
  <ul className="space-y-3">
    <li className="flex gap-2.5 items-baseline">
      <span className="text-amber-500/60 flex-shrink-0 text-xs mt-px">▸</span>
      <span>Enhanced an Android app in Kotlin with a plant-scanning feature powered by a ML model trained for <M>50 epochs</M>, achieving <M>92% accuracy</M> for tailored pesticide recommendations</span>
    </li>
    <li className="flex gap-2.5 items-baseline">
      <span className="text-amber-500/60 flex-shrink-0 text-xs mt-px">▸</span>
      <span>Collaborated with UI/UX designers to improve the interface and shipped the app to production on the <M>Google Play Store</M></span>
    </li>
    <li className="flex gap-2.5 items-baseline">
      <span className="text-amber-500/60 flex-shrink-0 text-xs mt-px">▸</span>
      <span>Built a motion-control model for a hyperspectral camera in a greenhouse environment, implemented via Arduino for automation and precise positioning</span>
    </li>
  </ul>
);

export const FullStackDeveloper = (
  <ul className="space-y-3">
    <li className="flex gap-2.5 items-baseline">
      <span className="text-amber-500/60 flex-shrink-0 text-xs mt-px">▸</span>
      <span>Built APIs via <M>AWS API Gateway</M> for authenticating users to Centralized Exchanges and relaying crypto wallet data from a React/Amplify frontend to an AWS-hosted backend</span>
    </li>
    <li className="flex gap-2.5 items-baseline">
      <span className="text-amber-500/60 flex-shrink-0 text-xs mt-px">▸</span>
      <span>Created serverless functions via <M>AWS Lambda</M> to authenticate users with Centralized Exchanges and integrate wallets into the tax algorithm</span>
    </li>
    <li className="flex gap-2.5 items-baseline">
      <span className="text-amber-500/60 flex-shrink-0 text-xs mt-px">▸</span>
      <span>Updated the tax algorithm in Python with Pandas to process wallet data and persist results to <M>AWS S3</M></span>
    </li>
  </ul>
);
