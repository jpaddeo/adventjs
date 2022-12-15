function getFilesToBackup(lastBackup, changes) {
  return [
    ...new Set(
      changes.map((x) => (x[1] > lastBackup ? x[0] : 0)).filter((x) => x !== 0)
    ),
  ].sort((fa, fb) => fa - fb);
}
