const MotoIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      <g fill="none" fillRule="evenodd">
        <path d="m0 0h32v32h-32z" />

        <path
          d="m21.3976443 0c2.1431453 0 4.4846026 1.84790991 6.620489 4.64279757.8158709 1.06759763 1.5223847 2.19181454 1.9561703 3.09686275.2287194.4771992.3789783.88574041.4373777 1.22589677.130692.76123499-.1581883 1.53444291-1.1287675 1.53444291l-.3022308-.0070024c-.1493249-.0080425-.3454471-.0248792-.7362058-.0593706-1.0156448-.0896488-1.7787277-.0849352-2.5620878.0882224l.2735604.5873181c.3367329-.0715316.6859964-.1091675 1.0440502-.1091675 2.7614237 0 5 2.2385763 5 5s-2.2385763 5-5 5-5-2.2385763-5-5c0-1.6905344.8389842-3.1851135 2.1232925-4.0900772l-.2916803-.625527c-.4172771.3178525-.9010289.8204435-1.5953421 1.6317997l-.8840221 1.0540812-.4179711.4911367c-1.484606 1.7133031-2.4655634 2.4716217-3.7300048 2.5343236l-.1742549.004263-7.13027629.0011864c-.46372867 2.2816492-2.48120217 3.9988136-4.89974091 3.9988136-2.76142375 0-5-2.2385763-5-5s2.23857625-5 5-5c2.4188915 0 4.43660076 1.7176654 4.89994372 3.999812l.88605628.000188-.000345-.0290143c-.0497943-.8320167-.4146223-1.7355376-1.32459674-2.7640258l-.1893317-.2073797c-.119662-.1271682-.24019224-.2472788-.36160859-.3605633-1.38230621-1.289726-2.51871932-1.6113203-4.62612344-1.62684l-.57566044.0006719c-2.06724456 0-3.61327656-2.85671996-3.27069651-4.34970728.17873809-.77895284.76108039-.99029217 1.51676779-.99479568.28648067-.00170727.5990043.02939162 1.02027779.09317291l1.15127949.1858323c.12217216.0173275.1963501.02467046.25189154.02607361l.03132336.00016148c2.03249295-.0334605 3.59649412.23374583 5.03398892.74394772l.34491374.1301715c.40499099.15777225.93693679.37501138 1.11634269.44169872l.1365799.04853214c.017887.00772939.0250971.01293291.0264317.017012l-.0014345.00205178.2520675-.21480094c1.3983183-1.17874425 2.3342246-1.67969943 3.3796944-1.89386135l.1857485-.03489577c1.3428643-.23020797 2.7036501-.1926031 4.0660112.03703614l.2674784.04852192-1.286413-2.00288608c-.1189313-.18803701-.2051957-.32782303-.2755979-.44656326l-.1107182-.19403828c-.031387-.05809474-.0576236-.11051642-.0798155-.15999987-.0485409-.10823645-.0819689-.20464986-.1002331-.3350623-.0700045-.49985777.1936393-1.08240916.8619173-1.15327552l.1390718-.00717469zm-16.3976443 13c-1.65685425 0-3 1.3431458-3 3s1.34314575 3 3 3c1.30588222 0 2.41688515-.8343774 2.82897577-1.9990993l-3.82897577-.0009007v-2l3.82932572.0000889c-.4118113-1.1652388-1.52307366-2.0000889-2.82932572-2.0000889zm22 0c-.05349 0-.1066531.0013999-.1594546.0041651l1.6530163 3.5462972-1.8126156.8452365-1.6899466-3.6237171c-.6085226.5490531-.9909995 1.3438696-.9909995 2.2280183 0 1.6568542 1.3431458 3 3 3s3-1.3431458 3-3-1.3431458-3-3-3zm-5.6023557-11h-1.2816443l.8444984 1.31274802c.4474775.700311.86541 1.36411352 1.2880578 2.04873234l.0569795.0980381c.0690595.1290877.0695063.20710043.0719637.63617047l-.1203878.24222983c-.1714294.33550446-.221574.35842973-.5224418.49598135l-.3274283.05714715c-.0464623.00590212-.0744386.0063313-.1020641.00312255l-.1654307-.02988573-.2487574-.07107192-.1666636-.05252377c-.3688708-.11590803-.669621-.20305428-1.0305208-.29263819-1.5247366-.37847584-3.0385175-.50916934-4.4723631-.2633644-.7903674.13549312-1.4766691.49881622-2.8457272 1.68448441-.0569933.04935888-.1154173.09518042-.1755098.13742567-.5711101.40149229-1.1663016.42716907-1.8627384.20290046l-.1959071-.07130232c-.38420867-.14677593-1.11407622-.44596043-1.36735586-.53585554-1.12294024-.39855882-2.33993293-.62238001-3.9273684-.63129502l-.52961001.0023623c-.16185415-.00299375-.31822177-.01990148-.62617832-.0681936l-1.04788772-.17095682c-.03598737-.00533818-.07074481-.01034575-.10431424-.01502511l.04290695.09451891c.26674166.55467151.74800327 1.19909968 1.12658239 1.19909968l.27220314-.00092845c2.76042521-.01373492 4.38995103.38825827 6.29397617 2.16476103.1533039.1430364.3045521.293758.45376.4523255 1.3843914 1.4712317 1.9717584 2.8831727 2.053484 4.2136432l.0062426.1573499h4.2420172c.5860639 0 1.3382278-.6078186 2.6121781-2.1045053l.9311805-1.1118734c1.3736032-1.623637 2.0902116-2.28717606 3.1025117-2.70725279 1.4457497-.59994644 2.5806507-.7577312 4.0436095-.6844539l.355503.02108539-.0232427-.04783507c-.3375546-.65446499-.8333421-1.4416014-1.4049656-2.21771658l-.2177527-.29024592c-1.7159496-2.24538442-3.5718606-3.74309959-4.8826124-3.85096137zm-1.3976443 6v2h-6v-2z"
          fill="#5d5d5e"
          fillRule="nonzero"
          transform="translate(0 5)"
        />
      </g>
    </svg>
  );
};

export default MotoIcon;