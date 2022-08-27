const TotalSum = (user_dashboardFood_data, user_dashboardExercise_data) => {
  let totalEnergy = 0;
  let totalAlcohol = 0;
  let totalCaffeine = 0;
  let totalWater = 0;
  let totalB1 = 0;
  let totalB2 = 0;
  let totalB3 = 0;
  let totalB5 = 0;
  let totalB6 = 0;
  let totalB12 = 0;
  let totalFolate = 0;
  let totalVitaminA = 0;
  let totalVitaminC = 0;
  let totalVitaminD = 0;
  let totalVitaminE = 0;
  let totalVitaminK = 0;
  let totalCarbs = 0;
  let totalFiber = 0;
  let totalStarch = 0;
  let totalSugars = 0;
  let totalNetCarbs = 0;
  let totalFat = 0;
  let totalMonounsaturated = 0;
  let totalPolyunsaturated = 0;
  let totalOmega3 = 0;
  let totalOmega6 = 0;
  let totalSaturated = 0;
  let totalTransFats = 0;
  let totalCholestrol = 0;
  let totalCalcium = 0;
  let totalCopper = 0;
  let totalIron = 0;
  let totalMagnesium = 0;
  let totalManganese = 0;
  let totalPhosphorus = 0;
  let totalSelenium = 0;
  let totalSodium = 0;
  let totalPottasium = 0;
  let totalZinc = 0;
  let totalProtein = 0;
  let totalCystine = 0;
  let totalHistidine = 0;
  let totalIsoleucine = 0;
  let totalLeucine = 0;
  let totalLysine = 0;
  let totalMethionine = 0;
  let totalPhynylalanine = 0;
  let totalThreonine = 0;
  let totalTryptophan = 0;
  let totalTryrosine = 0;
  let totalValin = 0;

  for (var i = 0; i < user_dashboardFood_data.length; i++) {
    totalEnergy += Number(user_dashboardFood_data[i].Food.General.Energy.val);
    totalAlcohol += Number(user_dashboardFood_data[i].Food.General.Alcohol.val);
    totalCaffeine += Number(
      user_dashboardFood_data[i].Food.General.Caffeine.val
    );
    totalWater += Number(user_dashboardFood_data[i].Food.General.Water.val);
    totalB1 += Number(user_dashboardFood_data[i].Food.Vitamins.B1.val);
    totalB2 += Number(user_dashboardFood_data[i].Food.Vitamins.B2.val);
    totalB3 += Number(user_dashboardFood_data[i].Food.Vitamins.B3.val);
    totalB5 += Number(user_dashboardFood_data[i].Food.Vitamins.B5.val);
    totalB6 += Number(user_dashboardFood_data[i].Food.Vitamins.B6.val);
    totalB12 += Number(user_dashboardFood_data[i].Food.Vitamins.B12.val);
    totalFolate += Number(user_dashboardFood_data[i].Food.Vitamins.Folate.val);
    totalVitaminA += Number(
      user_dashboardFood_data[i].Food.Vitamins.VitaminA.val
    );
    totalVitaminC += Number(
      user_dashboardFood_data[i].Food.Vitamins.VitaminC.val
    );
    totalVitaminD += Number(
      user_dashboardFood_data[i].Food.Vitamins.VitaminD.val
    );
    totalVitaminE += Number(
      user_dashboardFood_data[i].Food.Vitamins.VitaminE.val
    );
    totalVitaminK += Number(
      user_dashboardFood_data[i].Food.Vitamins.VitaminK.val
    );
    totalCarbs += Number(
      user_dashboardFood_data[i].Food.Carbohydrates.Carbs.val
    );
    totalCarbs += Number(
      user_dashboardFood_data[i].Food.Carbohydrates.Carbs.val
    );
    totalFiber += Number(
      user_dashboardFood_data[i].Food.Carbohydrates.Fiber.val
    );
    totalStarch += Number(
      user_dashboardFood_data[i].Food.Carbohydrates.Starch.val
    );
    totalSugars += Number(
      user_dashboardFood_data[i].Food.Carbohydrates.Sugars.val
    );
    totalNetCarbs += Number(
      user_dashboardFood_data[i].Food.Carbohydrates.NetCarbs.val
    );
    totalFat += Number(user_dashboardFood_data[i].Food.Lipids.Fat.val);
    totalMonounsaturated += Number(
      user_dashboardFood_data[i].Food.Lipids.Monounsaturated.val
    );
    totalPolyunsaturated += Number(
      user_dashboardFood_data[i].Food.Lipids.Polyunsaturated.val
    );
    totalOmega3 += Number(user_dashboardFood_data[i].Food.Lipids.Omega3.val);
    totalOmega6 += Number(user_dashboardFood_data[i].Food.Lipids.Omega6.val);
    totalSaturated += Number(
      user_dashboardFood_data[i].Food.Lipids.Saturated.val
    );
    totalTransFats += Number(
      user_dashboardFood_data[i].Food.Lipids.TransFats.val
    );
    totalCholestrol += Number(
      user_dashboardFood_data[i].Food.Lipids.Cholestrol.val
    );
    totalCalcium += Number(
      user_dashboardFood_data[i].Food.Minerals.Calcium.val
    );
    totalCopper += Number(user_dashboardFood_data[i].Food.Minerals.Copper.val);
    totalIron += Number(user_dashboardFood_data[i].Food.Minerals.Iron.val);
    totalMagnesium += Number(
      user_dashboardFood_data[i].Food.Minerals.Magnesium.val
    );
    totalManganese += Number(
      user_dashboardFood_data[i].Food.Minerals.Manganese.val
    );
    totalPhosphorus += Number(
      user_dashboardFood_data[i].Food.Minerals.Phosphorus.val
    );
    totalPottasium += Number(
      user_dashboardFood_data[i].Food.Minerals.Pottasium.val
    );
    totalSelenium += Number(
      user_dashboardFood_data[i].Food.Minerals.Selenuim.val
    );
    totalSodium += Number(user_dashboardFood_data[i].Food.Minerals.Sodium.val);
    totalZinc += Number(user_dashboardFood_data[i].Food.Minerals.Zinc.val);
    totalProtein += Number(user_dashboardFood_data[i].Food.Protein.Protein.val);
    totalCystine += Number(user_dashboardFood_data[i].Food.Protein.Cystine.val);
    totalHistidine += Number(
      user_dashboardFood_data[i].Food.Protein.Histidine.val
    );
    totalIsoleucine += Number(
      user_dashboardFood_data[i].Food.Protein.Isoleucine.val
    );
    totalLeucine += Number(user_dashboardFood_data[i].Food.Protein.Leucine.val);
    totalLysine += Number(user_dashboardFood_data[i].Food.Protein.Lysine.val);
    totalMethionine += Number(
      user_dashboardFood_data[i].Food.Protein.Methionine.val
    );
    totalPhynylalanine += Number(
      user_dashboardFood_data[i].Food.Protein.Phynylalanine.val
    );
    totalThreonine += Number(
      user_dashboardFood_data[i].Food.Protein.Threonine.val
    );
    totalTryptophan += Number(
      user_dashboardFood_data[i].Food.Protein.Tryptophan.val
    );
    totalTryrosine += Number(
      user_dashboardFood_data[i].Food.Protein.Tryrosine.val
    );
    totalValin += Number(user_dashboardFood_data[i].Food.Protein.Valin.val);
  }
  for (var i = 0; i < user_dashboardExercise_data.length; i++) {
    totalEnergy += Number(user_dashboardExercise_data[i].Exercise.Energy);
  }

  const Total = {
    General: [
      { name: "Energy", val: totalEnergy.toFixed(1), unit: "kcal" },
      { name: "Alcohol", val: totalAlcohol.toFixed(1), unit: "g" },
      { name: "Caffeine", val: totalCaffeine.toFixed(1), unit: "mg" },
      { name: "Water", val: totalWater.toFixed(1), unit: "g" },
    ],
    Vitamins: [
      { name: "B1", val: totalB1.toFixed(1), unit: "mg" },
      { name: "B2", val: totalB2.toFixed(1), unit: "mg" },
      { name: "B3", val: totalB3.toFixed(1), unit: "mg" },
      { name: "B5", val: totalB5.toFixed(1), unit: "mg" },
      { name: "B6", val: totalB6.toFixed(1), unit: "mg" },
      { name: "B12", val: totalB12.toFixed(1), unit: "ug" },
      { name: "Folate", val: totalFolate.toFixed(1), unit: "ug" },
      { name: "VitaminA", val: totalVitaminA.toFixed(1), unit: "ug" },
      { name: "VitaminC", val: totalVitaminC.toFixed(1), unit: "mg" },
      { name: "VitaminD", val: totalVitaminD.toFixed(1), unit: "IU" },
      { name: "VitaminE", val: totalVitaminE.toFixed(1), unit: "mg" },
      { name: "VitaminK", val: totalVitaminK.toFixed(1), unit: "ug" },
    ],
    Carbohydrates: [
      { name: "Carbs", val: totalCarbs.toFixed(1), unit: "g" },
      { name: "Fiber", val: totalFiber.toFixed(1), unit: "g" },
      { name: "Starch", val: totalStarch.toFixed(1), unit: "g" },
      { name: "Sugars", val: totalSugars.toFixed(1), unit: "g" },
      { name: "NetCarbs", val: totalNetCarbs.toFixed(1), unit: "g" },
    ],
    Lipids: [
      { name: "Fat", val: totalFat.toFixed(1), unit: "g" },
      {
        name: "Monounsaturated",
        val: totalMonounsaturated.toFixed(1),
        unit: "g",
      },
      {
        name: "Polyunsaturated",
        val: totalPolyunsaturated.toFixed(1),
        unit: "g",
      },
      { name: "Omega3", val: totalOmega3.toFixed(1), unit: "g" },
      { name: "Omega6", val: totalOmega6.toFixed(1), unit: "g" },
      { name: "Saturated", val: totalSaturated.toFixed(1), unit: "g" },
      { name: "TransFats", val: totalTransFats.toFixed(1), unit: "g" },
      { name: "Cholestrol", val: totalCholestrol.toFixed(1), unit: "mg" },
    ],
    Minerals: [
      { name: "Calcium", val: totalCalcium.toFixed(1), unit: "mg" },
      { name: "Copper", val: totalCopper.toFixed(1), unit: "mg" },
      { name: "Iron", val: totalIron.toFixed(1), unit: "mg" },
      { name: "Magnesium", val: totalMagnesium.toFixed(1), unit: "mg" },
      { name: "Manganese", val: totalManganese.toFixed(1), unit: "mg" },
      { name: "Phosphorus", val: totalPhosphorus.toFixed(1), unit: "mg" },
      { name: "Pottasium", val: totalPottasium.toFixed(1), unit: "mg" },
      { name: "Selenuim", val: totalSelenium.toFixed(1), unit: "mg" },
      { name: "Sodium", val: totalSodium.toFixed(1), unit: "mg" },
      { name: "Zinc", val: totalZinc.toFixed(1), unit: "mg" },
    ],

    Protein: [
      { name: "Protein", val: totalProtein.toFixed(1), unit: "g" },
      { name: "Cystine", val: totalCystine.toFixed(1), unit: "g" },
      { name: "Histidine", val: totalHistidine.toFixed(1), unit: "g" },
      { name: "Isoleucine", val: totalIsoleucine.toFixed(1), unit: "g" },
      { name: "Leucine", val: totalLeucine.toFixed(1), unit: "g" },
      { name: "Lysine", val: totalLysine.toFixed(1), unit: "g" },
      { name: "Methionine", val: totalMethionine.toFixed(1), unit: "g" },
      { name: "Phynylalanine", val: totalPhynylalanine.toFixed(1), unit: "g" },
      { name: "Threonine", val: totalThreonine.toFixed(1), unit: "g" },
      { name: "Tryptophan", val: totalTryptophan.toFixed(1), unit: "g" },
      { name: "Tryrosine", val: totalTryrosine.toFixed(1), unit: "g" },
      { name: "Valin", val: totalValin.toFixed(1), unit: "g" },
    ],
  };
  return Total;
};

module.exports = { TotalSum };
