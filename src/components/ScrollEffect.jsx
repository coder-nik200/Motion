import React from "react";
import { motion, useScroll } from "motion/react";

const ScrollEffect = () => {
  const { scrollYProgress } = useScroll();
  console.log(useScroll());

  return (
    <div className="p-20 text-center font-mono text-white">
      <motion.div
        style={{
          scaleX: scrollYProgress,
        }}
        className="bg-red-500 origin-left w-full h-3 fixed top-0 left-0"
      ></motion.div>

      <h1 className="text-4xl font-bold mb-8">Nitish Kumar Bharti</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
        sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius
        a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy
        molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
        Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium
        a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra
        tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.
        Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit
        sodales. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede
        pellentesque fermentum. Maecenas adipiscing ante non diam sodales
        hendrerit. Ut velit mauris, egestas sed, gravida nec, ornare ut, mi.
        Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce
        varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in
        tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue.
        Integer id felis. Curabitur aliquet pellentesque diam. Integer quis
        metus vitae elit lobortis egestas. Lorem ipsum dolor sit amet,
        consectetuer adipiscing elit. Morbi vel erat non mauris convallis
        vehicula. <br /> <br />
        Nulla et sapien. Integer tortor tellus, aliquam faucibus, convallis id,
        congue eu, quam. Mauris ullamcorper felis vitae erat. Proin feugiat,
        augue non elementum posuere, metus purus iaculis lectus, et tristique
        ligula justo vitae magna. Aliquam convallis sollicitudin purus. Praesent
        aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac
        euismod nibh nisl eu lectus. Fusce vulputate sem at sapien. Vivamus leo.
        Aliquam euismod libero eu enim. Nulla nec felis sed leo placerat
        imperdiet. Aenean suscipit nulla in justo. Suspendisse cursus rutrum
        augue. Nulla tincidunt tincidunt mi. Curabitur iaculis, lorem vel
        rhoncus faucibus, felis magna fermentum augue, et ultricies lacus lorem
        varius purus. Curabitur eu amet. Morbi vel metus. Donec auctor, neque
        sed luctus hendrerit, sapien orci faucibus ligula, ac bibendum libero
        ipsum non est. Phasellus sodales hendrerit est. Vestibulum purus quam,
        scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in
        dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis
        arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed
        aliquam ultrices mauris.
        <br />
        <br /> Integer ante arcu, accumsan a, consectetuer eget, posuere ut,
        mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc.
        Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui.
        Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies
        sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis
        hendrerit risus. Phasellus nec sem in justo pellentesque facilisis.
        Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor,
        tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien,
        tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas
        malesuada. Praesent congue erat at massa. Sed cursus turpis vitae
        tortor. Donec posuere vulputate arcu. Phasellus accumsan cursus velit.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat
        euismod orci, ac placerat dolor lectus quis orci. Phasellus consectetuer
        vestibulum elit. <br />
        <br />
        Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.
        Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque
        posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat,
        nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.
        Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam
        sagittis. Suspendisse pulvinar, augue ac venenatis condimentum, sem
        libero volutpat nibh, nec pellentesque velit pede quis nunc. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor.
        Maecenas vestibulum mollis diam. Pellentesque ut neque. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. In dui magna, posuere eget, vestibulum et, tempor auctor,
        justo. In ac felis quis tortor malesuada pretium. Pellentesque auctor
        neque nec urna. Proin sapien ipsum, porta a, auctor quis, euismod ut,
        mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
        Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
        aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet
        a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
        Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
        vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
        vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
        feugiat a, tellus.
      </p>
    </div>
  );
};

export default ScrollEffect;
