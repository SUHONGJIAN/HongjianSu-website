var header = $('.stats__header');
var bar  = $('.stats__item-bar');
var nums = $('.stats__item-num');
var overlay = $('.stats__overlay');
var back = $('.stats__overlay-back');
var isOpen = false;

var skill = $('#skill');
var projects = $('.list a');

$(document).on('ready', function() {
  entrance();
});

bar.on('click', showOverlay);
back.on('click', showOverlay);

function entrance() {
  bar.addClass('active');
  header.addClass('active');
  header.on('transitionend webkitTransitionend', function() {
    nums.css('opacity', '1');
    bar.css('transition-delay', '0');
    header.off('transitionend webkitTransitionend');
  });
}

function showOverlay() {
  if (!isOpen) {
    overlay.addClass('active').removeAttr('style');
    bar.css('transition', 'all 0.4s cubic-bezier(0.86, 0, 0.07, 1)')
    .removeClass('active');
    header.removeClass('active');
    nums.css('opacity', '0');
    $( '.list' ).makisu( 'open' );
    $(' .stats__overlay').css('z-index', '1');
    isOpen = true;
    
   updateInfo($(this).parent().index());
  } else {
    overlay.css('transition', 'all 0.4s cubic-bezier(0.755, 0.05, 0.855, 0.06)').removeClass('active');
    bar.addClass('active').removeAttr('style');
    header.addClass('active');
    nums.css('opacity', '1');
    $( '.list' ).makisu( 'close' );
    $(' .stats__overlay').css('z-index', '0');
    isOpen = false;
  }
}

var data = [
  {
    skill: 'Java',
    total: 8,
    text: ['Self Introduction App','Dodge MiniGame','Fortification Simulation [Concurrency]','Smart Dictionary Implementation','Stop Villain Simulation','Chef Simulation','RSA Encryp/Decryp', 'DES Encryp/Decryp'],
    href: ['https://github.com/SUHONGJIAN/JAVA-Application-Self-introduction-SU','https://github.com/SUHONGJIAN/Dodge-MiniGame','https://github.com/SUHONGJIAN/Concurrency-BlockingQueue-ExecutorService','https://github.com/SUHONGJIAN/Trie-Structure-Implementation','https://github.com/SUHONGJIAN/Stop-the-Evil-Villain-Simulation','https://github.com/SUHONGJIAN/Five-star-Restaurant-Chef-Simulation','https://github.com/SUHONGJIAN/Information_Security-RSA-Encryption_decryption-JAVA','https://github.com/SUHONGJIAN/Information_Security-DES-Encryption_decryption-JAVA'], 
  },
  {
    skill: 'Python',
    total: 1,
    text: ['Enterprise-level App [Django]'],
    href: ['https://github.com/SUHONGJIAN/-Engineering-project-WeiFan-company-backdend-Django-']
  },
  {
    skill: 'HTML/CSS',
    total: 1,
    text: ['This Website!<br/>[Lib: font awesome, animate...]'],
    href: ['https://github.com/SUHONGJIAN/HongjianSu-website']
  },
  {
    skill: 'JavaScript',
    total: 1,
    text: ['This Website!<br/>[Lib: jQuery, anime, three...]'],
    href: ['https://github.com/SUHONGJIAN/HongjianSu-website']
  },
  {
    skill: 'C#',
    total: 1,
    text: ['Real-time Display Web'],
    href: ['https://github.com/SUHONGJIAN/Azure-webapp']
  },
  {
    skill: 'Matlab',
    total: 8,
    text: ['Clear Blurred Images', 'Spam Email Filtering [SVM]', 'Face Recognization [PCA]','Recognization of Moving Objects','Skin Color Detection','Positioning Algorithms','Distrubuted Simulation','RFID-related Simulation'],
    href: ['https://github.com/SUHONGJIAN/Matlab-make-blurred-images-clear','https://github.com/SUHONGJIAN/Matlab-Support_Vector_Machine-Spam_filtering','https://github.com/SUHONGJIAN/Matlab-Visual-Processing-Advanced-Face-perception','https://github.com/SUHONGJIAN/Matlab-Visual-Processing-Moving-target-segmentation','https://github.com/SUHONGJIAN/Matlab-Visual-Processing-Skin_color-detection','https://github.com/SUHONGJIAN/Matlab-5_different_positioning_algorithms','https://github.com/SUHONGJIAN/Matlab-Distributed_sensoorithm_judege_LEACH-clustering-energy-exhaustion','https://github.com/SUHONGJIAN/Matlab-RFID_related_experiments']
  },
  {
    skill: 'SQL',
    total: 1,
    text: ['Enterprise-level App [MySQL]'],
    href: ['https://github.com/SUHONGJIAN/-Engineering-project-WeiFan-company-backdend-Django-']
  },
  {
    skill: 'C++',
    total: 3,
    text: ['Branch Prediction Simulator','Single-cycle MIPS Simulation', 'Pipeline MIPS Simulation'],
    href: ['https://github.com/SUHONGJIAN/Branch_Prediction_Simulation', 'https://github.com/SUHONGJIAN/Single_Cycle_MIPS_Simulation','https://github.com/SUHONGJIAN/Pipeline_MIPS_Simulation']
  }
];

function updateInfo(index) {

  var total = data[index].total;
  skill.text(data[index].skill);

  for (i = 0; i < total; i++) {
    projects.eq(i).css("visibility", "visible");
    projects.eq(i).html(data[index].text[i]);
    projects.eq(i).attr("href", data[index].href[i]);
    projects.eq(i).css("border-radius", "0 0 0 0");
  }

  projects.eq(total-1).css("border-radius", "0 0 40px 40px");

  for (i = total; i < 8; i++) {
    projects.eq(i).parent().css("visibility", "hidden");
    projects.eq(i).html('');
    projects.eq(i).attr("href", '');
  }

}