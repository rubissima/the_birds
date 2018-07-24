function seedPick(selection, pick) {
    selection
        .attr("id", pick);
};
d3.selectAll(".seed").call(d3.drag().on("start", started));