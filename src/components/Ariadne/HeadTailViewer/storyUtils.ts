const sequence1 =
  "GTTGCGCAGCTCCTGGATGTAGGCCAGCCAGTCCTGATTGGAGATGCCGTTCTGCAGCTTCAGATCCTTGCTCTCCTTCAGGTGATTCAGCAGCAGCTGGCCCTTCAGGGCGATGTGGTAGGCGCCATTGGCATCGGCGTCCATGGGCCACTCTGGGTTCTGAAACCGGGAGTCGAAGCACACGCCATTCAGATCGCGCACGGGGCTGTTGATATAGTCCTCGCCTGTGGCGGCATTGGAGTTCCGCATCTGCAGCACGCTGCGGATCAGGGCCACCATGGTGTCGATGGCGTGAGAATCGTCATTCTCCAGCAGCTTTGGCAGGATGTTGGAGCCATCCCTGAACACGATGCCCTTCTCCTCCAGCAGGGCGATCAGCTCGTTGGCAGGATACAGGTCCCGGTATCTGCCGGTGAATCTGTGATTCTCGATCACTGGCACGATTCTCTTGCCGGCGATGAAAGGGGTGCCCTTGGCGTCAAACTGTGTCTCGTTCTTCTCGAACACGATATCCCATGCAGGCATAAAGCCGGGCAGGCCCCTCTGGAAGGACAGATTTCTGTTCATCTTAAAGTGCAGGATGAAGTCGCCGGTTTTCACGTCGTAGTGCAGAAAGTCGAAGCCCTCCAGGAAGTGCTTGCGGCTCTCGTGATTCTTGATGGTTTTCCACACGAAGGGGTCCACGAAGCCGGTCAGGGGATCGATCTTAGATGTATATGGGGCAGGCACGTAAAACAGGAAGCCAGACTGGGTGCCCATCTTGGCAAAGGAGGTGAACTGGTCTGTCAGCTGGTATGGGTTCAGCACGCCTCCCACTTTCTCTGCTGGATAGTCCTTCAGCACCAGGCAATTCAGCTTATCGATCAGCATCTTCTCGAACTGCTGGTACACGGCCTTCTCGGCGATGCCGGTCCTCTTGCTCTTAAAGCCGAAATTCAGGTTCTCCAGCACCACCACGGCCTGGTAGTGGATCATCAGGTCCACGATCTCGTGGATGACCTGGCTCAGATAGCCCTGCTTCAGATCCTTGATTGTGCCCACCACAGACCAGGCCTGCCTTGCTGCCACCCTCTCCTTCTCCCTGTTGTCCAGCTTCTTCTGGTAATCAAACTGCTGGATGGTGTTCAGGCTCCGCTGCTCCAGGATCTTGCCGGTGGAGTCGATCACTGTGATATAGATCAGGTTTCTCTCGCCCCGATCGATGCCGATGATAGGTGTCTCGGGGTGCTCCTTCAGGTAGGCATTCACCCTCTGGTTGAACTTAGATGGGGAATTGGCGGCCTGATAGTTCAGTGTGATAGGCACGTGGAAAAAGAACTTGTCGCTGGTAAAGCGCCTATCCTTGATGATCTCGTGAGACACCTCCTTGGTGATCACGTTGGGCAGCAGGGCCCTGGCCTCATCAGACAGGTCGTGGGACAGTCTGTGATTCACATAGTCGTACAGCTCCTGGTACAGGGTGTCGGGGATTGGGGTTTTCTGATCCTTCAGCTTCTTGTTCAGCATCTTCTCTCCCAGCCGGTGTGCCATCCTCTTCATCCTGGACTTAGGGCGGTAGAACAGCTCGGCCTGGCCATTCAGCTTGATGCTTGTCTTGGCCAGGTTCTCTGGAGAAAACAGGCCGGTCCAATACAGTGTGTGCAGATTAGGCTTGCCGTGGTGGCCCTTGGCAAAGTCCTTGTTATAGATCTGGAACAGGTACAGCTTGCCTGTCTCCACGGCATCCATGATCTCCTTCTCGGCGATTCTCTGGAAGCTGATGTGGTACAGCAGGGGATTCAGCTCGGCATAGTACTCGCCCAGGTCCTTATACTGAGAGGATGGCCGCAGGCTAGACAGATCGATAGAGGTTGTCTTGGTATACTTGGACAGAAAATCCCTTGTGAAGTCGATCCACTTGCACAGGGCCTCTCTGTAGCCCTTCTGGTCGCCGGTTTTCTTGGCGTAGGCTGTCTGAAACTTCTTTGGCTCCTTCTCAGGATTGTTCAGGTCGTAGATCTCCTTTGTGATCTCCAGAGGCTCGATGAAATTGTTGGACAGCAGGATGGGGGTTGTGTGGGTCTGAAAGTGGGCTGTCACGGCCTTCAGCTGGGTGCTGCACTTTGGGATCATCTTGGCGGCATCAGGGAAGTAGTCATAGTACATCTTATCAAAGCCCTCGCTGGTTTTCTCTGTGGGCTCGAAGCTCAGGGCCTTATACCTGCCCTTCTGCTTTGGCATGATGCCCAGATAGTACAGGCCGTTCTTCACAAACAGGATGGCGCCATTGTTCTTCTCCTTATTCACGTCCCAGCCAGAGGCCAGTGTAGGCATCTGAAAGTTCAGCTTGAACTTCTCCACGGAGTAGGGCTTCTTGGTGGCATAATTTCTGGCCTTGTTGTAGAAGCTCAGAGAAGGCTCCATCTCCAGCTTGATGCCGGTCAGCCGGGCAGAGAACTCGGGGTCCACCTCGTTGGACTCATCCACGGCAAACCAGTCCAGCAGGTGGTACAGGCCCAGCAGGCTGTCCAGCTGAGACTTCAGGATCTCCTTCTCCTCCTGCTTCTTCAGGGTTGTAGGCAGTGGCTGATCCAGGGCGGCGTGTGCGTGGGACAGGATCTCGCTGGTTTTCTGCTTGAAGGCCTCGCTCAGCTCCTTGCCTGCGGCAGAGATGATCTCCTGCAGGTTGATATCCTCGTGCTTCAGGCTGCGCTGCACCTTCTCCTTGGCAGACTTGGTGATCTTGCCTGTCAGCTCGGAGATTCTCCGCTCATACAGGGCATTCCTCAGTGTATCCCAGTGGTCGCACAGGGCGCTGCTGATTGTCTCCAGCTTCTTGTGGCTGATGAAGATGTGTGTCAGGTCGATGCTGTTCAGCTCGTTAAACAGGGCCTCGGCTGTCTCCAGCACGTTCTCGTTTCTCAGCAGTGTCTTGTACTTGCAGAAGGACTGGATCACTTCCTCGTCGCTCTTAAACTCCTCCAGGATGAAAGACAGGGTGTTCCTATCGGACAGGATCTGCTTAAACAGGGGGATGAATCTGTGTGGCAGGGAGGCGATGATGTGGGCTGTCTCATCATTCTTCTGGATGGCCAGATTCAGCACCTCGTTCAGGCCCTTGATCTTCTCGGTGCCTGCCTCCCGAGAGATTCCTCCCAGCAGCTGGTTATACAGGTCGATCTGGGTCTGTGTCAGCAGCTGGTTATAAAAAGGGAAGGAAAACACCTCCTCGATGGAGGTGCTCACGAAGATGCCGATGGCCTTCTTCACGTTCTCAAAGTGCTCCCGCAGGCTGGGCACGGCGGTGATCAGGCGTGTGAAGATGTGACAATTCTCCTTAAACTTGGGGAAGTTGTCCTGCACGATGCGGTGTGGGATGGCTGTGCTGATATCCTCGGCGCTGAACACGTTCTTCCTGTTCTCATAAAAGCCGGAGAAGTAGGTTGTAAACTTGTCGAAGCTCCGCAGCAGGGCGTTCTCGTGCTCGGTTGTGGTCACGGTGCCCAGCTGCTTCAGCACCTTGCCATTAAACAGCTCGGCCTTGAACAGGCCCTTGTAGATCTCGGCGTGTCTCTTATTGATGGCATCGGTCAGGTTGTCTGTCCGGCCGATGAAGTAGTCGTGGATGGCATTGCGATATGTGGCCTGCTCCTCGATCAGGGCGTTCCTTGTCTCCTCGGTTTTCTCCTTTCTATAGGAGTCGATGGCGGCGCTCAGGTTCTCCCAATCCAGCTGCACCAGCTGCAGGCACTGGTCGGCATAGGTCTTGTAGATCCGATCGATGATGGGCTTCAGCTCCTTGTAGTGATCATTGCGGGCCTTGTCCTCCTCGATGAAGCCCTGCTCCTGGATGTGCTTCAGGGTCTTGCCCTGTGGGATCAGCTCAAACCGCAGTGTCTTGCTCACCTGATACAGGTTGGTAAAGCCCTCGAACTGTGTCAT";
const sequence2 =
  "GTTGCGCAGCTCCTGGATGTAGGCCAGCCAGTCCTGATTGGAGATGCCGTTCTGCAGCTTCAGATCCTTGCTCTCCTTCAGGTGATTCAGCAGCAGCTGGCCCTTCAGGGCGATGTGGTAGGCGCCATTGGCATCGGCGTCCATGGGCCACTCTGGGTTCTGAAACCGGGAGTCGAAGCACACGCCATTCAGATCGCGCACGGGGCTGTTGATATAGTCCTCGCCTGTGGCGGCATTGGAGTTCCGCATCTGCAGCACGCTGCGGATCAGGGCCACCATGGTGTCGATGGCGTGAGAATCGTCATTCTCCAGCAGCTTTGGCAGGATGTTGGAGCCATCCCTGAACACGATGCCCTTCTCCTCCAGCAGGGCGATCAGCTCGTTGGCAGGATACAGGTCCCGGTATCTGCCGGTGAATCTGTGATTCTCGATCACTGGCACGATTCTCTTGCCGGCGATGAAAGGGGTGCCCTTGGCGTCAAACTGTGTCTCGTTCTTCTCGAACACGATATCCCATGCAGGCATAAAGCCGGGCAGGCCCCTCTGGAAGGACAGATTTCTGTTCATCTTAAAGTGCAGGATGAAGTCGCCGGTTTTCACGTCGTAGTGCAGAAAGTCGAAGCCCTCCAGGAAGTGCTTGCGGCTCTCGTGATTCTTGATGGTTTTCCACACGAAGGGGTCCACGAAGCCGGTCAGGGGATCGATCTTAGATGTATATGGGGCAGGCACGTAAAACAGGAAGCCAGACTGGGTGCCCATCTTGGCAAAGGAGGTGAACTGGTCTGTCAGCTGGTATGGGTTCAGCACGCCTCCCACTTTCTCTGCTGGATAGTCCTTCAGCACCAGGCAATTCAGCTTATCGATCAGCATCTTCTCGAACTGCTGGTACACGGCCTTCTCGGCGATGCCGGTCCTCTTGCTCTTAAAGCCGAAATTCAGGTTCTCCAGCACCACCACGGCCTGGTAGTGGATCATCAGGTCCACGATCTCGTGGATGACCTGGCTCAGATAGCCCTGCTTCAGATCCTTGATTGTGCCCACCACAGACCAGGCCTGCCTTGCTGCCACCCTCTCCTTCTCCCTGTTGTCCAGCTTCTTCTGGTAATCAAACTGCTGGATGGTGTTCAGGCTCCGCTGCTCCAGGATCTTGCCGGTGGAGTCGATCACTGTGATATAGATCAGGTTTCTCTCGCCCCGATCGATGCCGATGATAGGTGTCTCGGGGTGCTCCTTCAGGTAGGCATTCACCCTCTGGTTGAACTTAGATGGGGAATTGGCGGCCTGATAGTTCAGTGTGATAGGCACGTGGAAAAAGAACTTGTCGCTGGTAAAGCGCCTATCCTTGATGATCTCGTGAGACACCTCCTTGGTGATCACGTTGGGCAGCAGGGCCCTGGCCTCATCAGACAGGTCGTGGGACAGTCTGTGATTCACATAGTCGTACAGCTCCTGGTACAGGGTGTCGGGGATTGGGGTTTTCTGATCCTTCAGCTTCTTGTTCAGCATCTTCTCTCCCAGCCGGTGTGCCATCCTCTTCATCCTGGACTTAGGGCGGTAGAACAGCTCGGCCTGGCCATTCAGCTTGATGCTTGTCTTGGCCAGGTTCTCTGGAGAAAACAGGCCGGTCCAATACAGTGTGTGCAGATTAGGCTTGCCGTGGTGGCCCTTGGCAAAGTCCTTGTTATAGATCTGGAACAGGTACAGCTTGCCTGTCTCCACGGCATCCATGATCTCCTTCTCGGCGATTCTCTGGAAGCTGATGTGGTACAGCAGGGGATTCAGCTCGGCATAGTACTCGCCCAGGTCCTTATACTGAGAGGATGGCCGCAGGCTAGACAGATCGATAGAGGTTGTCTTGGTATACTTGGACAGAAAATCCCTTGTGAAGTCGATCCACTTGCACAGGGCCTCTCTGTAGCCCTTCTGGTCGCCGGTTTTCTTGGCGTAGGCTGTCTGAAACTTCTTTGGCTCCTTCTCAGGATTGTTCAGGTCGTAGATCTCCTTTGTGATCTCCAGAGGCTCGATGAAATTGTTGGACAGCAGGATGGGGGTTGTGTGGGTCTGAAAGTGGGCTGTCACGGCCTTCAGCTGGGTGCTGCACTTTGGGATCATCTTGGCGGCATCAGGGAAGTAGTCATAGTACATCTTATCAAAGCCCTCGCTGGTTTTCTCTGTGGGCTCGAAGCTCAGGGCCTTATACCTGCCCTTCTGCTTTGGCATGATGCCCAGATAGTACAGGCCGTTCTTCACAAACAGGATGGCGCCATTGTTCTTCTCCTTATTCACGTCCCAGCCAGAGGCCAGTGTAGGCATCTGAAAGTTCAGCTTGAACTTCTCCACGGAGTAGGGCTTCTTGGTGGCATAATTTCTGGCCTTGTTGTAGAAGCTCAGAGAAGGCTCCATCTCCAGCTTGATGCCGGTCAGCCGGGCAGAGAACTCGGGGTCCACCTCGTTGGACTCATCCACGGCAAACCAGTCCAGCAGGTGGTACAGGCCCAGCAGGCTGTCCAGCTGAGACTTCAGGATCTCCTTCTCCTCCTGCTTCTTCAGGGTTGTAGGCAGTGGCTGATCCAGGGCGGCGTGTGCGTGGGACAGGATCTCGCTGGTTTTCTGCTTGAAGGCCTCGCTCAGCTCCTTGCCTGCGGCAGAGATGATCTCCTGCAGGTTGATATCCTCGTGCTTCAGGCTGCGCTGCACCTTCTCCTTGGCAGACTTGGTGATCTTGCCTGTCAGCTCGGAGATTCTCCGCTCATACAGGGCATTCCTCAGTGTATCCCAGTGGTCGCACAGGGCGCTGCTGATTGTCTCCAGCTTCTTGTGGCTGATGAAGATGTGTGTCAGGTCGATGCTGTTCAGCTCGTTAAACAGGGCCTCGGCTGTCTCCAGCACGTTCTCGTTTCTCAGCAGTGTCTTGTACTTGCAGAAGGACTGGATCACTTCCTCGTCGCTCTTAAACTCCTCCAGGATGAAAGACAGGGTGTTCCTATCGGACAGGATCTGCTTAAACAGGGGGATGAATCTGTGTGGCAGGGAGGCGATGATGTGGGCTGTCTCATCATTCTTCTGGATGGCCAGATTCAGCACCTCGTTCAGGCCCTTGATCTTCTCGGTGCCTGCCTCCCGAGAGATTCCTCCCAGCAGCTGGTTATACAGGTCGATCTGGGTCTGTGTCAGCAGCTGGTTATAAAAAGGGAAGGAAAACACCTCCTCGATGGAGGTGCTCACGAAGATGCCGATGGCCTTCTTCACGTTCTCAAAGTGCTCCCGCAGGCTGGGCACGGCGGTGATCAGGCGTGTGAAGATGTGACAATTCTCCTTAAACTTGGGGAAGTTGTCCTGCACGATGCGGTGTGGGATGGCTGTGCTGATATCCTCGGCGCTGAACACGTTCTTCCTGTTCTCATAAAAGCCGGAGAAGTAGGTTGTAAACTTGTCGAAGCTCCGCAGCAGGGCGTTCTCGTGCTCGGTTGTGGTCACGGTGCCCAGCTGCTTCAGCACCTTGCCATTAAACAGCTCGGCCTTGAACAGGCCCTTGTAGATCTCGGCGTGTCTCTTATTGATGGCATCGGTCAGGTTGTCTGTCCGGCCGATGAAGTAGTCGTGGATGGCATTGCGATATGTGGCCTGCTCCTCGATCAGGGCGTTCCTTGTCTCCTCGGTTTTCTCCTTTCTATAGGAGTCGATGGCGGCGCTCAGGTTCTCCCAATCCAGCTGCACCAGCTGCAGGCACTGGTCGGCATAGGTCTTGTAGATCCGATCGATGATGGGCTTCAGCTCCTTGTAGTGATCATTGCGGGCCTTGTCCTCCTCGATGAAGCCCTGCTCCTGGATGTGCTTCAGGGTCTTGCCCTGTGGGATCAGCTCAAACCGCAGTGTCTTGCTCACCTGATACAGGTTGGTAAAGCCCTCGAACTGTGTCAT";
export const exampleSequences = [sequence1, sequence2];
